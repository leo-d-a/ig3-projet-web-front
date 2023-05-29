<script>
import axios from "axios";

export default{
    name: "Signup",
    data() {
        return{
        requestError: "",
        nom: "",
        prenom: "",
        email: "",
        password: "",
        confirmPassword: "",
        emailRules: [
            (v) => !!v || "Un email est requis",
            (v) => /.+@.+\..+/.test(v) || "l'émail doit être vali",
        ],
        nomRules: [
            (v) => !!v || "Un nom est requis",  
        ],
        prenomRules: [
            (v) => !!v || "Un prénom est requis",  
        ],
        passwordRules: [
            (v) => !!v || "Un mot de passe est requis",
            (v) => v.length >= 2 || "Le mot de passe doit contenir au moins 2 caractères",
        ],
        confirmPasswordRules: [
            (v) => !!v || "La confirmation du mot de passe est requise",
            (v) => v === this.password || "Les mots de passe ne correspondent pas",
        ],
        };
    },
    methods: {
        async signup() {
            const { valid } = await this.$refs.form.validate();
            if (!valid) {
                return;
            }
            try {
                const response = await axios.post("http://localhost:3002/auth/signup", {
                    "mail_address": this.email,
                    "username": this.username,
                    "password": this.password,
                });
                console.log(response);
                this.$router.push("/login");
            } catch (error) {
                console.log(error);
                this.requestError = error.response.data.message;
            }
        }
    }
}
</script>

<template>
    <v-form class="form" id="Users" ref="form">
        <h1>S'inscrire !</h1>
        <v-text-field
            v-model="nom"
            label="Nom"
            type="text"
            required
            :rules="nomRules"
        ></v-text-field>
        <v-text-field
            v-model="prenom"
            label="Prénom"
            type="text"
            required
            :rules="prenomRules"
        ></v-text-field>
        <v-text-field
            v-model="email"
            label="Email"
            type="email"
            required
            :rules="emailRules"
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            :rules="passwordRules"
        ></v-text-field>
        <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            required
            :rules="confirmPasswordRules"
        ></v-text-field>
        <v-btn color="primary" type="submit" @click.prevent="signup">S'inscrire</v-btn>
        <div v-if="requestError" class="error">{{requestError}}</div>
    </v-form>
</template>

<style scoped>
    .form {
        width: 100%;
        max-width: 500px;
        margin: 30px auto;
    }
    v-form-title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    .error {
    color: red;
    margin-top: 1rem;
  }
</style>