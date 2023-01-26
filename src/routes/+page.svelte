<script lang="ts">
  // import browser to check if we are in the browser
  import { browser } from "$app/environment";
  // import goto to navigate to a new page with a query string
  import { goto } from "$app/navigation";
  // import the type for the data we are going to receive from the server || +page.ts
  import type { PageData } from "./$types";

  //  assign the data to a variable
  export let data: PageData;

  //  extract tableData from the data we received from the server and assign it to a variable
  //    starting with $: will make it reactive and will update the variable when the data changes on the server
  $: tableData = data.tableData;

  //   declare a variable to hold the filter value
  let postIdFilter: string | null = null;

  // declare a reactive variable to hold the query string we will use to navigate to a new page
  // queries will be an array of strings that will be joined with & to create the query string
  // we will filter out any null values from the array
  // this will make sure that we don't have any empty query strings
  // we will use the postIdFilter variable to create the query string
  // if postIdFilter is null we will not add it to the query string
  // we can also add other filters ',' separated to the query string

  $: queries = [postIdFilter ? "postId=" + postIdFilter : null].filter(
    (q) => q != null
  );

  //   if we are in the browser we will navigate to a new page with the query string
  //   this will make sure that we don't navigate to a new page when we are on the server and its optional to do this
  //    $: {goto(`/?${queries.join("&")}`);} we can just do this without the if statement
  $: if (browser) {
    goto(`/?${queries.join("&")}`);
  }

  //   You can use your table component here and pass the tableData to it
  //   <Table data={tableData} /> something like this
</script>

<h4>
  Filter comments using postId, from <a
    href="https://jsonplaceholder.typicode.com">json placeholder</a
  >.
</h4>
<label for="ageFilter">
  postId
  <input type="number" name="ageFilter" bind:value={postIdFilter} />
</label>

<!-- This is just to show the data change, To be replaced by table component -->
<div>
  {JSON.stringify(tableData, null, 2)}
</div>
