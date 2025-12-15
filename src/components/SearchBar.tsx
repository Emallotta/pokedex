export function SearchBar (){
 function search(formData: FormData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }
    return(
        <>
    <form action={search}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
        </>
    )

}