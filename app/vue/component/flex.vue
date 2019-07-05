<template><div :class="classes"><slot></slot></div></template>
<style>
  .skade-flex {
    text-align: left;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  .skade-flex-auto {
    overflow-x: hidden;
    overflow-y: auto;
    transform: translate3d(0,0,0);
    -webkit-overflow-scrolling: touch;
  }
  .skade-flex-hide {
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .skade-flex-scroll {
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .skade-flex-nowrap {
    flex-wrap: nowrap;
  }
  .skade-flex-wrap {
    flex-wrap: wrap;
  }
  .skade-flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }
  .skade-flex-dir-row {
    flex-direction: row;
  }
  .skade-flex-dir-row-reverse {
    flex-direction: row-reverse;
  }
  .skade-flex-dir-column {
    flex-direction: column;
  }
  .skade-flex-dir-column-reverse {
    flex-direction: column-reverse;
  }
  .skade-flex-align-left {
    justify-content: flex-start;
  }
  .skade-flex-align-right {
    justify-content: flex-end;
  }
  .skade-flex-align-center {
    justify-content: center;
  }
  .skade-flex-align-between {
    justify-content: space-between;
  }
  .skade-flex-align-around {
    justify-content: space-around;
  }
  .skade-flex-valign-top {
    align-items: flex-start;
  }
  .skade-flex-valign-bottom {
    align-items: flex-end;
  }
  .skade-flex-valign-middle {
    align-items: center;
  }
  .skade-flex-valign-stretch {
    align-items: stretch;
  }
  .skade-flex-valign-baseline {
    align-items: baseline;
  }
  .skade-flex-align-content-start {
    align-content: flex-start;
  }
  .skade-flex-align-content-end {
    align-items: flex-end;
  }
  .skade-flex-align-content-center {
    align-items: center;
  }
  .skade-flex-align-content-between {
    align-items: stretch;
  }
  .skade-flex-align-content-around {
    align-items: baseline;
  }
  .skade-flex-align-content-stretch {
    align-items: baseline;
  }
  .skade-flex-span-1 {
    flex: 1;
  }
  .skade-flex-span-2 {
    flex: 2;
  }
  .skade-flex-span-3 {
    flex: 3;
  }
  .skade-flex-span-4 {
    flex: 4;
  }
  .skade-flex-span-5 {
    flex: 5;
  }
  .skade-flex-span-6 {
    flex: 6;
  }
  .skade-flex-span-7 {
    flex: 7;
  }
  .skade-flex-span-8 {
    flex: 8;
  }
  .skade-flex-span-9 {
    flex: 9;
  }
  .skade-flex-span-10 {
    flex: 10;
  }
  .skade-flex-span-11 {
    flex: 11;
  }
  .skade-flex-span-12 {
    flex: 12;
  }
  .skade-flex-span-13 {
    flex: 13;
  }
  .skade-flex-span-14 {
    flex: 14;
  }
  .skade-flex-span-15 {
    flex: 15;
  }
  .skade-flex-span-16 {
    flex: 16;
  }
  .skade-flex-span-17 {
    flex: 17;
  }
  .skade-flex-span-18 {
    flex: 18;
  }
  .skade-flex-span-19 {
    flex: 19;
  }
  .skade-flex-span-20 {
    flex: 20;
  }
  .skade-flex-span-21 {
    flex: 21;
  }
  .skade-flex-span-22 {
    flex: 22;
  }
  .skade-flex-span-23 {
    flex: 23;
  }
  .skade-flex-span-24 {
    flex: 24;
  }
  .skade-flex-item {
    box-sizing: border-box;
  }
  .skade-flex-blocked {
    width: 100%;
  }
  .skade-flex-fulled {
    height: 100%;
  }
</style>
<script>
  const directionMaps = ["row", "row-reverse", "column", "column-reverse"];
  const wrapMaps = ["nowrap", "wrap", "wrap-reverse"];
  const alignMaps = ["left", "right", "center", "between", "around"];
  const valignMaps = ["top", "middle", "bottom", "stretch", "baseline"];
  const alignContentMaps = [
    "start",
    "end",
    "center",
    "between",
    "around",
    "stretch"
  ];
  const overflow = ["hide", "scroll", "auto"];

  export default {
    name: "Flex",
    data() {
      return {
        prefixClassName: "skade-flex"
      };
    },
    props: {
      span: {
        type: Number,
        validator: value => {
          if (!value) return true;
          return value > 0 && value <= 24;
        }
      },
      direction: {
        type: String,
        validator: value => directionMaps.indexOf(value) > -1
      },
      wrap: {
        type: String,
        validator: value => wrapMaps.indexOf(value) > -1
      },
      align: {
        type: String,
        validator: value => alignMaps.indexOf(value) > -1,
        default: 'left'
      },
      valign: {
        type: String,
        validator: value => valignMaps.indexOf(value) > -1,
        default: 'top'
      },
      alignContent: {
        type: String,
        validator: value => alignContentMaps.indexOf(value) > -1
      },
      blocked: Boolean,
      fulled: Boolean,
      overflow: {
        type: String,
        validator: value => {
          if (!value) return true;
          return overflow.indexOf(value) > -1;
        }
      }
    },
    computed: {
      classes() {
        const classes = [];

        if (this.span) {
          if (
            this.direction ||
            this.wrap ||
            this.align ||
            this.valign ||
            this.alignContent
          ) {
            classes.push(this.prefixClassName);
          }
          classes.push(
            `${this.prefixClassName}-item`,
            `${this.prefixClassName}-span-${this.span}`
          );
        } else {
          classes.push(this.prefixClassName);
        }

        this.direction &&
        classes.push(`${this.prefixClassName}-dir-${this.direction}`);
        this.wrap && classes.push(`${this.prefixClassName}-${this.wrap}`);
        this.align && classes.push(`${this.prefixClassName}-align-${this.align}`);
        this.valign &&
        classes.push(`${this.prefixClassName}-valign-${this.valign}`);
        this.alignContent &&
        classes.push(
          `${this.prefixClassName}-align-content-${this.alignContent}`
        );
        this.blocked && classes.push(`${this.prefixClassName}-blocked`);
        this.fulled && classes.push(`${this.prefixClassName}-fulled`);
        this.overflow && classes.push(`${this.prefixClassName}-${this.overflow}`);

        return classes;
      }
    }
  };
</script>
