export default {
  data() {
    return {
      observer: null,
      scrollTimeout: null,
      isScrolling: false,
      activeIndex: 0,
      sliderElements: []
    };
  },
  methods: {
    goPrevious() {
      if (this.activeIndex > 0) {
        this.sliderElements[this.activeIndex - 1].scrollIntoView({
          block: "nearest",
          inline: "start",
          behavior: "smooth"
        });
      }
    },
    goTo(index) {
      if (
        this.activeIndex !== index &&
        index >= 0 &&
        index <= this.sliderElements.length - 1
      ) {
        this.activeIndex = index;
        this.sliderElements[this.activeIndex].scrollIntoView({
          block: "nearest",
          inline: "start",
          behavior: "smooth"
        });
      }
    },
    goNext() {
      if (this.activeIndex < this.sliderElements.length - 1) {
        this.sliderElements[this.activeIndex + 1].scrollIntoView({
          block: "nearest",
          inline: "start",
          behavior: "smooth"
        });
      }
    },
    handleIntersect(entries) {
      const entry = entries.find(e => e.isIntersecting);
      if (this.isScrolling && entry) {
        const index = this.sliderElements.findIndex(e => e === entry.target);
        this.activeIndex = index;
      }
    },
    handleScroll() {
      this.isScrolling = true;
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false;
      }, 100);
    }
  },
  mounted() {
    window.addEventListener("wheel", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("touchmove", this.handleScroll);

    this.sliderElements = [...this.$refs.carousel.children];
    this.observer = new IntersectionObserver(this.handleIntersect, {
      root: this.$refs.carousel,
      threshold: 0.5
    });
    this.sliderElements.forEach(el => {
      this.observer.observe(el);
    });
  },
  beforeDestroy() {
    this.sliderElements.forEach(el => {
      this.observer.unobserve(el);
    });
  }
};
