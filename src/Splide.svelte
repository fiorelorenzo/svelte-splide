<script>
  import { onMount, onDestroy } from "svelte";
  import Splide from "@splidejs/splide";
  import { groups } from "./lib/store";

  export let splide;
  export let autoHideArrows;
  export let autoHideArrowsOffset = 0;
  export let currentIndex;
  export let group;
  export let options = {};
  export let extensions;
  export let transition;

  const SYNC_EVENT = "move.svelte-splide-sync";

  let element;

  $: if (options) {
    splide && splide.refresh();
  }

  $: if (splide && options && options.arrows != false && autoHideArrows) {
    checkLeftArrow(currentIndex == 0);
    checkRightArrow(currentIndex >= splide.length - 1 - autoHideArrowsOffset);
  }

  $: if (splide && group) {
    if (!$groups[group] || !$groups[group].includes(splide)) {
      $groups[group] = $groups[group] ? [...$groups[group], splide] : [splide];
    }

    splide.off(SYNC_EVENT).on(SYNC_EVENT, moveGroup);
  }

  $: splide && splide.mount(extensions, transition);

  function moveGroup(newIndex, prevIndex, destIndex) {
    $groups[group].map((el) =>
      el
        .off(SYNC_EVENT)
        .go(el.is("loop") ? destIndex : newIndex, false)
        .on(SYNC_EVENT, moveGroup)
    );
  }

  function checkLeftArrow(hide) {
    const arrow = element.querySelector(
      "button.splide__arrow.splide__arrow--prev"
    );
    arrow.style.display = hide ? "none" : "block";
  }

  function checkRightArrow(hide) {
    const arrow = element.querySelector(
      "button.splide__arrow.splide__arrow--next"
    );
    arrow.style.display = hide ? "none" : "block";
  }

  onMount(() => {
    splide = new Splide(element, options);

    splide.on("move.svelte-splide", (newIndex, oldIndex, destIndex) => {
      currentIndex = splide.is("loop") ? destIndex : newIndex;
    });

    splide.mount(extensions, transition);

    currentIndex = splide.index;
  });

  onDestroy(() => {
    if (group) {
      $groups[group] = $groups[group].filter((el) => el != splide);
    }

    splide && splide.destroy();
  });
</script>

<svelte:options accessors />

<div class="splide" bind:this={element}>
  <div class="splide__track">
    <ul class="splide__list">
      <slot />
    </ul>
  </div>
</div>
