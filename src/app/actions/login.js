const loginUser = async e => {
    const formdata=new FormData()
    const inputdata=Object.fromEntries(formdata.entries())
    const result = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(),
    });
    if(!result.ok){
        alert("login failed")
    }
    router.push("/admin")
};
export default loginUser;
