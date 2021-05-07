<template>
  <div id="home" class="main">
    <div class="wrapper">
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
  </div>
</template>

<style scoped>
.main {
  background: #6d96aa;
}
.typer {
  font-size: 100px;
  width: 100%;
  font-family: Copperplate, "Copperplate Gothic Light";
}

</style>