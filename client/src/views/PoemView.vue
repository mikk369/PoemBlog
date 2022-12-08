<template>
    <div class="wrapper">
        <HeaderView></HeaderView>
            <div class="card-container">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title"><b>{{title}}</b></h4>
                            <p class="card-text">{{text}}</p>
                <div class="wrapper-container">
                    <div class="author-wrapper">
                        <div class="poem-author">{{author}}</div>
                    </div>
                    <div class="button-wrapper">
                            <button @click="pushToUpdate()"  v-if="isLogged" type="button" class="update-btn btn btn-warning">Update</button>
                        <button v-if="isLogged" @click="deletePost(id)" type="button" class="delete-button btn btn-danger">Delete</button>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
<FooterView></FooterView>
        </div>
</template>
<style>
.card-container{
height: 100vh;
}
.wrapper-container{
display: flex;
justify-content: space-between;
}
.author-wrapper{
display: flex;
align-items: flex-end;
}

.update-btn{
margin-right: 3px;
}
.card{
width:400px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
border-radius: 9px;
}
.card-wrapper{
display: flex;
text-align: center;
justify-content: center;
padding: 70px;
}


</style>    
<script>
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';
import axios from "axios"
export default {
name: "poemview",
data(){
    return {
        id:"",
        title: "",
        text: "",
        author:"",
        isLogged: this.checkIfAuthenticated(),
    }
},
async mounted(){
    const response = await axios.get('http://localhost:3000/api/v1/poems/' + this.$route.params.id)
    this.title = response.data.data.poem.title
    this.text = response.data.data.poem.text
    this.author = response.data.data.poem.author
    this.id = response.data.data.poem._id
},
methods: {
    deletePost(id) {
        axios.delete('http://localhost:3000/api/v1/poems/' + id)
        this.$router.push('/');
    },
    pushToUpdate(){
        this.$router.push({name: 'edit-poem', params: { id: this.id }})
    },
    checkIfAuthenticated() {
        let token = localStorage.getItem('token');
    if (token) {
        return true;
    } else {
        return false;
    }
},
},
components:{
FooterView,
HeaderView
},
}
</script>