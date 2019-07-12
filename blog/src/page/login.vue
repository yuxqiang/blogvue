<template>
<div>
 <header class="head-login"> 
   <div class="wrapper"> 
    <div class="sui-navbar"> 
     <div class="navbar-inner"> 
      <!-- <a href="#" class="sui-brand"> <img src="../assets/img/asset-logo-black.png" alt="社交" /> </a>  -->
      <!-- <span class="login-text"> 登录 注册</span>  -->

        <span style="text-align: center;display:block;font-size:20px"> 登录 注册</span>

     </div> 
    </div> 
   </div>
  </header>
   <div class="wrapper loginsign"> 
    <div class="item signup"> 
    <div class="form"> 
     <!-- <h3 class="loginsign-title">注册新账号</h3>  -->

    <h3 style="text-align: center;font-size:20px">注册  新账号</h3>
    
     <form class="sui-form"> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">名字</label> 
       <div class="controls"> 

      <el-input  id="inputname"   type="text" v-model="name" value="name" placeholder="真实姓名或常用昵称" class="input-xlarge"  maxlength="10" :validate-event="true">  </el-input>

        <!-- <input type="text" id="inputname" placeholder="真实姓名或常用昵称" class="input-xlarge" v-model="name" />  -->
       </div> 
      </div> 
      <div class="different"> 
       <div class="radio-content"> 
        <div id="a1" class="phone"> 
            <label for="inputname" class="control-label">手机号码</label> 
         <div class="control-group number"> 

         <el-input id="phone"   type="text" v-model="phone"  value="phone" placeholder="仅支持大陆手机号" class="input-xlarge"  maxlength="11" :validate-event="true">  </el-input>

          <!-- <input type="text" placeholder="仅支持大陆手机号" class="input-xlarge" v-model="phone"/>  -->
         </div> 
         <div class="control-group code"> 
              <label for="inputname" class="control-label">短信验证码</label> 
          <div class="input-append"> 
           <!-- <input id="appendedInputButton" type="text" placeholder="短信验证" class="span2 input-large msg-input" v-model="check"/> class="input-xlarge"  -->

          <el-input id="appendedInputButton" type="text" v-model="check"  value="check" placeholder="短信验证码"   maxlength="6" :validate-event="true"> </el-input>

           <button type="button" class="sui-btn msg-btn">获取验证码</button> 
          </div> 
         </div> 
         <div class="control-group"> 
          <label for="inputpassword" class="control-label">密码</label> 
          <div class="controls"> 

            <el-input id="inputpassword"  type="text" placeholder="请输入6-16位密码"  value="password" v-model="password" minlength=6  maxlength="16" :validate-event="true" show-password></el-input>

           <!-- <input type="text" id="inputpassword" placeholder="请输入6-16位密码" class="input-xlarge" v-model="password" />  -->
          </div> 
         </div> 
        </div> 
       </div> 
      </div> 
      <div class="control-group btn-signup"> 
       <label class="control-label"></label> 
       <div class="controls"> 
        <label> <input type="checkbox" /><span class="type-text" style="font-size:12px;">同意协议并接受《服务条款》</span> </label> 
        <button type="button" class="sui-btn btn-danger btn-yes" v-on:click="register">注 册</button> 
       </div> 
      </div> 
     </form> 
    </div> 
      </div> 
   </div>  
   </div>  
</template>

<script>
export default {

 data() {
    return {
      name: '',
      check: '',
      password:'',
      phone:''
    }
  },


    methods:{
      register () {  
          console.log("111111111111");
           //var inputname = $("#inputname").val();

          //let inputanme =document.getElementById('inputname').value;
          let inputanme2 = this.name;
          let check = this.check;
          let phone = this.phone;
           let password = this.password;
           console.log(check);
           console.log(inputanme2);
           console.log(phone);
           console.log(password);

        
    }

    }
}
</script>

<style>

.form{
  /* height:200px;
  width:200px; 
  border:black solid 1px;
 text-align:center;*/

}

#inputname{
width:200px; 
height:30px;
}
#inputname{
width:200px; 
height:30px;
}


#phone{
width:200px; 
height:30px;
}
#appendedInputButton{
width:200px; 
height:30px;
}
#appendedInputButton{
width:200px; 
height:30px;
}
#inputpassword{
width:200px; 
height:30px;
}
</style>
