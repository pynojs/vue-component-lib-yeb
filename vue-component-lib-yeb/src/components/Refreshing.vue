<template>
    <div @click="refreshing" :class="[isRefresh?'refresh':'no-refresh']">
        <div class="refreshing-circle" :style="refreshingStyleCircle">
            <div class="refreshing-arrow" :style="refreshingStyleArrow"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Refreshing",
  props: {
    radius: {
      type: Number,
      default: 25
    },
    refreshed: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isRefresh: false,
      refreshingStyleCircle: {
        width: 2 * this.radius + "px",
        height: 2 * this.radius + "px"
      },
      refreshingStyleArrow: {
        top: Math.sqrt(2) / 2 * this.radius + this.radius + "px",
        left: this.radius - Math.sqrt(2) / 2 * this.radius + "px"
      }
    };
  },
  methods: {
    refreshing: function() {
      if (this.refreshed) {
        this.isRefresh = !this.isRefresh;
      }
    }
  }
};
</script>
<style scoped lang='less'>
.refreshing-circle {
  border: 2px solid #a9a9a9;
  border-left: 2px solid transparent;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  .refreshing-arrow {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-left: 2px solid #a9a9a9;
    border-bottom: 2px solid #a9a9a9;
    transform: rotate(90deg);
    position: absolute;
  }
}
.refresh {
  animation: 1s refresh;
  display: inline-block;
}
.no-refresh {
  animation: 1s noRefresh;
  display: inline-block;
}
@keyframes refresh {
  to {
    transform: rotate(360deg);
  }
}
@keyframes noRefresh {
  to {
    transform: rotate(360deg);
  }
}
</style>


