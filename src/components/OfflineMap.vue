<template>
  <div>
    <div>
      this is offline map
    </div>
    <div>
      <iframe
        src="/static/offlinemap.html"
        scrolling="no"
        frameborder="0"
        class="offlinemap"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.offlinemap {
  width: 100%;
  height: 700px;
  border-radius: 10px;
  background: aqua;
}
</style>
