<script>
  import "@splidejs/splide/dist/css/splide.min.css";
  import { Splide, SplideSlide } from "@fiorelorenzo/svelte-splide";

  const options = {
    arrows: true,
    pagination: false,
    autoWidth: true,
    rewind: false,
    gap: 50,
  };

  const autoHideArrowsOffset = 2;

  let defaultCurrentIndex;
  let autoWidthCurrentIndex;
  let autoWidthAutoHideArrowsCurrentIndex;
  let groupCurrentIndex;
</script>

<style>
  main {
    margin-bottom: 100px;
  }
</style>

<main>
  <h1>Default</h1>
  <p>Current index: {defaultCurrentIndex}</p>

  <Splide bind:currentIndex={defaultCurrentIndex}>
    {#each Array(10) as i}
      <SplideSlide>
        <img
          src="https://via.placeholder.com/540x360"
          alt={`splide-slide-${i}`} />
      </SplideSlide>
    {/each}
  </Splide>

  <br />
  <hr />

  <h1><i>autoWidth</i></h1>
  <p>Current index: {autoWidthCurrentIndex}</p>

  <Splide {options} bind:currentIndex={autoWidthCurrentIndex}>
    {#each Array(10) as i}
      <SplideSlide>
        <img
          src="https://via.placeholder.com/540x360"
          alt={`splide-slide-${i}`} />
      </SplideSlide>
    {/each}
  </Splide>

  <br />
  <hr />

  <h1><i>autoWidth</i> and <i>autoHideArrows</i></h1>
  <p>Current index: {autoWidthAutoHideArrowsCurrentIndex}</p>

  <Splide
    {options}
    autoHideArrows
    {autoHideArrowsOffset}
    bind:currentIndex={autoWidthAutoHideArrowsCurrentIndex}>
    {#each Array(10) as i}
      <SplideSlide>
        <img
          src="https://via.placeholder.com/540x360"
          alt={`splide-slide-${i}`} />
      </SplideSlide>
    {/each}
  </Splide>

  <br />
  <hr />

  <h1>Group syncing</h1>
  <p>Current index: {groupCurrentIndex}</p>

  <Splide
    {options}
    autoHideArrows
    {autoHideArrowsOffset}
    group="demo"
    bind:currentIndex={groupCurrentIndex}>
    {#each Array(10) as i}
      <SplideSlide>
        <img
          src="https://via.placeholder.com/540x360"
          alt={`splide-slide-${i}`} />
      </SplideSlide>
    {/each}
  </Splide>
  <br />
  <Splide {options} autoHideArrows {autoHideArrowsOffset} group="demo">
    {#each Array(10) as i}
      <SplideSlide>
        <img
          src="https://via.placeholder.com/540x360"
          alt={`splide-slide-${i}`} />
      </SplideSlide>
    {/each}
  </Splide>
  <br />
  <Splide {options} autoHideArrows {autoHideArrowsOffset} group="demo">
    {#each Array(10) as i}
      <SplideSlide>
        <img
          src="https://via.placeholder.com/540x360"
          alt={`splide-slide-${i}`} />
      </SplideSlide>
    {/each}
  </Splide>
</main>
