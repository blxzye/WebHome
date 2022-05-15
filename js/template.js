// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDs9IXHA3uxODWK1xlt3ir7NryEt3uX5_k",
    authDomain: "webhomedatabase.firebaseapp.com",
    projectId: "webhomedatabase",
    storageBucket: "webhomedatabase.appspot.com",
    messagingSenderId: "1041679554691",
    appId: "1:1041679554691:web:41a25c07b422ea8314e3b6",
    measurementId: "G-MEE4VYFPVT"
  };

firebase.initializeApp(firebaseConfig);

/* SingleEventListener

bd = firebase.firestore()

bd.collection("categorias").doc("2").get().then(function (doc){
    if(doc.exists){

        dados = doc.data()
        id = dados.id
        nome = dados.nome

        document.body.innerHTML = "Nome: " + nome + " | " + " Id: " + id
    }
    else{
        alert("nao existe")
    }
})*/



/*
EventListener

bd = firebase.firestore()

bd.collection("categorias").doc("2").onSnapshot(function (doc){
    if(doc.exists){

        dados = doc.data()
        id = dados.id
        nome = dados.nome

        document.body.innerHTML = "Nome: " + nome + " | " + " Id: " + id
    }
    else{
        alert("nao existe")
    }
})*/

bd = firebase.firestore()

bd.collection("categorias").onSnapshot(function (documentos){
    documentos.docChanges().forEach(function (changes){
        if(changes.type === "added"){
            documento = changes.doc
            dados = documento.data()
            key = documento.id

            console.log("added Nome da Pasta: " + key)
        }
        else if(changes.type === "modified"){
            documento = changes.doc
            dados = documento.data()
            key = documento.id

            console.log("modified Nome da Pasta: " + key)
        }
        else if(changes.type === "removed"){
            documento = changes.doc
            dados = documento.data()
            key = documento.id

            console.log("removed Nome da Pasta: " + key)
            
        }
    })
})