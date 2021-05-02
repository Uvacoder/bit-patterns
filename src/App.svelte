<script>
  import rough from 'roughjs';
  import { WiredSlider } from 'wired-elements/lib/wired-slider';
  import { WiredCard } from 'wired-elements/lib/wired-card';
  import { flip } from 'svelte/animate';

  import BitRow from './lib/BitRow.svelte';

  let roughSvg;

  let slider;

  $: bitNumber = 1;
  $: newCombos = [];
  $: combinations = combos(bitNumber);

  function combos(n){
    let result = [];
    for(let y=0; y<Math.pow(2,n); y++){
        var combo = [];
        for(let x=0; x<n; x++){
            if((y >> x) & 1)
                combo.push(true);
             else 
                combo.push(false);
        }
        result.push(combo);
      }
      result = result.sort((a,b) => {
        return (count(a,false) === count(b,false)) ? 0 : count(a,false) < count(b,false) ? 1 : -1;
      })
    return result;
}

function count(array, value) {
  let count = 0;
  array.forEach((element) => (element === value && count++));
  return count;
}

function firstTrue(array) {
  return array.indexOf(true);
}

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

function makeBitSignature(array) {
  let bitSignature = '';
  array.forEach((e) => {
    bitSignature += e === true ? '1' : '0';
  });
  return bitSignature;
}

function updateBitNumber() {
  bitNumber = slider.value;
  combinations = [...combos(bitNumber)];
}
</script>

<svelte:head>
  <link
      href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap"
      rel="stylesheet"
    />
</svelte:head>

<!-- <header> -->
  <!-- <wired-card elevation="3"> -->
    <!-- <h1>Bit Combinations</h1> -->
    <!-- <section class="legend">
      <div class="legend-item">
        <span class="label">On:</span> <svg use:makeRect={true} viewBox="0 0 16 16" width="16" height="28"></svg>
      </div>
      <div class="legend-item">
        <span class="label">Off:</span> <svg use:makeRect={false} viewBox="0 0 16 16" width="16" height="28"></svg>
      </div>
    </section> -->
  <!-- </wired-card> -->
<!-- </header> -->
<main>
  <section class="control">
    <h1>Bits: <span class="highlight">{bitNumber}</span></h1>
    <h1>Combinations: <span class="highlight">{combinations.length}</span></h1>
    <wired-slider min="1" max="8" value="1" bind:this={slider} on:change={updateBitNumber} />
    <!-- <h4 class="legend-title">Legend</h4> -->
    <section class="sidebar-legend">
      <div class="legend-item">
        <span class="label">On:</span> <svg use:makeRect={true} viewBox="0 0 16 16" width="16" height="28"></svg>
      </div>
      <div class="legend-item">
        <span class="label">Off:</span> <svg use:makeRect={false} viewBox="0 0 16 16" width="16" height="28"></svg>
      </div>
    </section>
    <footer>
      <p>
        Made with <a href="http://svelte.dev">Svelte</a>, a <a href="http://https://roughjs.com/">Rough</a>, <a href="http://https://wiredjs.com/">Wired</a>, and <a href="https://vitejs.dev/">Vite</a>
      </p>
    </footer>
  </section>
  <article class="bit-list">
    {#each combinations as stateRow (makeBitSignature(stateRow))}
    <div animate:flip>
      <BitRow bits={stateRow} bitSignature={makeBitSignature(stateRow)} />
    </div>
    {/each}
  </article>
</main>

<style>
  :root {
    font-family: 'Gloria Hallelujah';
  }

  h1 { 
    font-size: 3rem;
    margin: 0;
    padding: 0;
    line-height: 1;
    margin-bottom: 2rem;
  }

  .highlight {
    color: tomato;
  }

  main {
    width: 60%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 1em;
    margin: 2rem auto;
    gap: 5rem;
  }
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* grid-column: 1/3; */
    text-align: center;
    margin-bottom: 5rem;
  }
  wired-card h1 {
    margin: 3rem;
  }
  .sidebar-legend {
    display: flex;
    justify-content: start;
    text-align: center;
    margin: 2rem 0;
    padding: 0;
    height: 2rem;
  }
  .legend-item {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0 1rem;
  }
  .label {
    margin-right: 1rem;
  }
  .control {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
  .bit-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: start;
    align-items: start;
  }
  wired-slider {
    --wired-slider-knob-color: tomato;
  }
  footer {
    text-align: center;
  }
</style>
