<template>
  <footer class="preview-footer">
    <div className="links">
      <a> 店铺主页 </a>
      <a> 个人中心 </a>
      <a> 店铺信息 </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.preview-footer {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  .links {
    cursor: pointer;
  }

  .links > a:not(:last-child) {
    border-right: 1px solid #e5e5e5;
  }

  .links > a {
    padding: 0 6px;
    color: #666;
    font-size: 12px;
  }

  a {
    color: #333;
    background: transparent;
    text-decoration: none;
  }
}
</style>
