<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input type="text" v-model="movie" class="form-control" @keyup.enter='addMovie'>

    <ul>
      <li v-for="(movieName, key) in movies" :key="key">{{ movieName.name }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      movie: null,
      movies: []
      // movies: ['thor', 'perfume']
    }
  },
  methods: {
    addMovie() {
      // this.movies.push(this.movie);
      firebase.database().ref('movies').push({
          name: this.movie
        })
        .then((data)=>{
          console.log(data);

        })
        .catch((error)=>console.log(error));
    }
  },
  created() {
    firebase.database().ref('movies').on('value', (snapshot)=> {
      this.movies = snapshot.val();
    });
  }
}
</script scoped>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
