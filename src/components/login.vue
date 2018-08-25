<template>
    <div id="login">
   
    <input type="text" name="username" placeholder="username" v-model="username">
    <input type="password" name="password" placeholder="password" v-model="password">
    <button type="button" v-on:click="login()">Login</button>
   
    </div>
</template>

<script>
export default {
    name : 'login' ,
    component :{

    },
    data : function() {
        return { 
            username : '',
            password : ''
        }
    },
    methods : {
        login(){ if(this.username != "" && this.password != "") {
        if(this.username == this.$parent.username && this.password == this.$parent.password) {
           this.$router.push({path: 'secure'});
            console.log(this.username,this.password);
        } else {
            console.log("The username and / or password is incorrect");
        }
    } else {
        console.log("A username and password must be present");
    }

        }
    }
}
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
