<template>
    <div class="header">
        <h1>欢迎来到成都东软学院管理网！</h1>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
.header {
  border-radius: 4px;
  height: 100%;
position: relative;
background: linear-gradient(60deg,rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
color: wheat;
}
h1{
      
      margin: 10px auto;
      font-family: 'Lato','sans-serif';
      font-weight: 300;
      font-size: 48px;
}

@media (max-width:768px) {
    h1{
        font-size: 16px;
    }
}
</style>