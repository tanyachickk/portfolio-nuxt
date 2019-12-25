import { debounce } from "~/helpers/debounce";

export default {
  data() {
    return {
      isLandscapeOrientation: true,
      debouncedResizeHandler: debounce(this.onResize, 200)
    };
  },
  methods: {
    onResize() {
      this.isLandscapeOrientation =
        window.innerHeight > window.innerWidth ? false : true;
    }
  },
  mounted() {
    window.addEventListener("resize", this.debouncedResizeHandler, false);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.debouncedResizeHandler, false);
  }
};
