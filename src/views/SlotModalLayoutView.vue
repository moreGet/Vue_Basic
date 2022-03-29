<template>
  <div class="modal-container">
    <header class="modal-header">
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scope>
.modal-header {
  padding-top: 20px;
}
</style>
