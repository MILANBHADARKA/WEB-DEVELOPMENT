function a(){
    let username="Milan";
    console.log(this.username);      //here this is not work because in only object we refere current context with using "this" in function this is not work.
}

a();