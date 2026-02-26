<template>
  <div class="about">
    <span @click="triggerTypeError()">触发TypeError</span>
    <el-divider direction="vertical"></el-divider>
    <span @click="triggerReferenceError()">触发ReferenceError</span>
    <el-divider direction="vertical"></el-divider>
    <span @click="triggerSyntaxError()">触发SyntaxError</span>
  </div>
</template>

<script setup lang="ts">
const triggerTypeError = () => {
  const typeError = undefined;
  if (typeError.length > 0) {
    console.log("err!");
  }
};

const triggerReferenceError = () => {
  throw new ReferenceError('Hello');
};

const triggerSyntaxError = () => {
  throw new SyntaxError('Hello');
};
</script>