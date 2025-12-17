import { use, useState } from "react";

export function SearchBar({ricerca}) {
  function search(formData) {
    const query = formData.get("query");
    ricerca(query)

  }
  return (
    <>
      <form action={search}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
    </>
  )

}