<script>
  import rough from 'roughjs';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  export let bits = [];
  export let bitSignature;

  let roughSvg;


  function makeRect(node, state) {
    roughSvg = rough.svg(node);

    const rect = roughSvg.rectangle(0,0,16,16, {
      fill: state === true ? 'tomato' : '',
      stroke: 'tomato',
      roughness: 1,
      hachureGap: 0.9
    });
    node.appendChild(rect);
  }
</script>


<section class="bit-single" id={bitSignature}>
  {#each bits as bit}
  <div class="bit" transition:fade={{duration: 500}}>
    <svg use:makeRect={bit} class="rough-rect" viewBox="0 0 16 16" height="16">

    </svg>
  </div>
  {/each}
</section>


<style>
    .bit-single {
    display: flex;
    gap: 0.5rem;
    position: relative;
  }
  .bit {
    position: relative;
    padding: 0;
    width: 1rem;
    height: 1rem;
    box-sizing: border-box;
  }
  .bit svg {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>