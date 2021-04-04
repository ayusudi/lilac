<template lang="">
  <div class="h-full w-full bg-purple-200 flex items-center">
    <flowers></flowers>
      <div class="box-border md:box-content bg-white rounded flex flex-col flex-wrap h-5/6 w-5/6 m-auto shadow-lg z-10">
      <div class="form bg-purple-100 rounded-l p-5 flex flex-row w-1/3 h-full">

        <form action="post" method="post" class="flex flex-col items-center m-auto h-3/4" v-if="landingPage">
          <h2 class="title-todo">DAILY <br> TODO LIST</h2>
          <inputComponent v-bind="{ label : 'Nickname', type : 'text', size : 21 }" v-if="page === 'LandingPage-Signup'"></inputComponent> 
          <inputComponent v-bind="{ label : 'Email', type : 'text', size : 25 }"></inputComponent> 
          <inputComponent v-bind="{ label : 'Password', type : 'password', size : 21 }"></inputComponent> 
          <input type="submit" class="button-component py-0.5 px-2 rounded bg-indigo-200 my-4 text-sm w-18" :value="submitButton" v-on:click="changePage('List-To-Do')">
          <p v-if="page === 'LandingPage-Login'" class="ask">Need an account? <a href="#" v-on:click="changePage('LandingPage-Signup')">Sign up</a></p>
          <p v-else class="ask">I have an account, try to <a href="#" v-on:click="changePage('LandingPage-Login')">Login</a></p>
        </form>
        <div class="timeline mx-auto h-full" v-else>
          <img src="/assets/calendar.png" class="m-auto mt-6" width="50%">
          <h2 class="little">DAILY TODO LIST</h2>

          <br>
          <inputComponent v-bind="{ label : 'ToDo', type : 'text', size : 24 , placeHolder : 'create todo for today'}"></inputComponent> 

          <p class="text-sm text-gray-800 pl-1 mt-0.5">Open previous todo list</p>
          <calendar></calendar>
          <input type="submit" class="button-component py-0.5 px-2 rounded bg-indigo-200 my-4 text-sm w-18" value="Logout" v-on:click="changePage('LandingPage-Login')">

        </div>

      </div>
      <div class="image w-2/3 bg-white w-2/3 h-full rounded-r flex">
        <div class="w-full h-full flex">
          <img src="/assets/lilac-iu.jpeg" alt="" class="object-cover self-center m-auto responsive" v-if="landingPage">
          <div v-else class="w-full">
            <h2 class="title-timeline"><b class="text-purple-900" >{{nickname.toUpperCase()}}'s</b> TODO LIST</h2>
            <hr class="line"/>
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
          
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import inputComponent from "../components/Input"
import flowers from "../components/Flowers"
import calendar from "../components/Calendar"
export default {
  name : "App",
  data : () => {
    return {
      page: "List-To-Do",
      submitButton: "Create",
      landingPage : false,
      nickname : "Carly"
    }
  },
  components : {inputComponent, flowers, calendar },
  methods : {
    changePage(pageName){
      let listPage = {
        "LandingPage-Signup" : { page : "LandingPage-Signup", submitButton : "Sign up", landingPage : true },
        "LandingPage-Login" : { page : "LandingPage-Login", submitButton : "Login", landingPage : true},
        "List-To-Do" : { page : "List-To-Do", submitButton : "Create", landingPage : false}
      }
      let updateData = listPage[pageName]
      if (updateData) {
        for (const key in updateData) {
          this[key] = updateData[key]
        }
      } 
    }
  }
}
</script>
<style scoped>
   h2.title-todo{
    font-family: 'Frank Ruhl Libre', serif;
    font-weight: 500;
    font-size: 30pt;
    text-align: center;
    color: rgb(36, 36, 36);
    margin-bottom: 15%;
    padding: 0 2.5%;
    border-bottom: solid rgb(255, 255, 255);
  }
  p.ask{
    font-size: 8.5pt;
    color:rgb(70, 70, 70);
  }
  p.ask a {
    color: rgb(90, 34, 129);
    text-decoration: underline;
  }
  .button-component {
    border: outset;
    border-color: #bccafa;
    cursor: pointer;
  }
  .button-component:active {
    border: inset;
    border-color: #b3c3f8;
  }
  .title-timeline {
    font-family: 'Frank Ruhl Libre', serif;
    font-weight: 800;
    font-size: 28pt;
    color: rgb(128, 128, 128);
    padding: 3%;
  }
  .line {
   border-top: 2.5px solid  rgb(133, 133, 133);
  }
  .little {
    font-family: 'Frank Ruhl Libre', serif;
    font-weight: 700;
    text-align: center;
    color: rgb(54, 54, 54);
    font-size: 14pt;
    margin-bottom: 2.5%; 
  }
</style>