<template>
  <div id="home" class="main">
    <div class="typer">
      <vue-typer
        :text="['The Typing Game']"
        :preTypeDelay="500"
        :typeDelay="100"
        erase-style="clear"
        class="lead"
      ></vue-typer>
    </div>
  </div>
</template>

<style scoped>
.main {
  background: #87AD96;
}
.typer {
  font-size: 6rem;
  font-family: Copperplate, "Copperplate Gothic Light";
}
</style>