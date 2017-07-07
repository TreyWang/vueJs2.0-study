<template>
  <div>
    <h3>测试Slot</h3>
    <slot name="header">noHeader</slot>
    <h4>以下是一个Slot</h4>
    <slot></slot>
    <h4>以下是一个具名Slot</h4>
    <slot name="namedSlot"></slot>
  </div>
</template>

<script>
  export default{

  }

</script>
