<script lang="ts">
	import McHeadsContainer from "$lib/components/McHeadsContainer.svelte";
  import ToggleGenCheckboxes from "$lib/components/ToggleGenCheckboxes.svelte";
  import CoinChart from "$lib/components/CoinChart.svelte"
  import IFrameDisplayer from "$lib/components/IFrameDisplayer.svelte"
</script>


<style>
  :global(body) {
    margin: 0px;
  }

  #background {
    width: 100vw;
    height: 100vh;
    background-color: #181a1b;
  }

  #allContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #coinChangesTitle {
    text-align: center;
    color: white;
    margin-top: 0px;
  }

  #affiliationDisclaimer {
    color: white;
    position: absolute;
    right: 0px;
    font-size: 12pt;
  }

  #iFrameAndDisclaimerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #iFrameDisclaimer {
    text-align: center;
    color: white;
    width: 80%;
  }

  #chartAndButtonsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1274px) {
    #allContainer {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    #allContainer {
      flex-direction: column;
    }
  }
</style>


<svelte:head>
  <title>ENreco Coin Tracker</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> 
  <script defer src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</svelte:head>

<div id="background">
  <p id="affiliationDisclaimer">
      Not affiliated with hololive, this is an unofficial fansite
  </p>
  <h1 id="coinChangesTitle">
    ENreco Coin Tracker
  </h1>
  <div id="allContainer">
    <div id="chartAndButtonsContainer">
      <CoinChart />
      <div>
        <ToggleGenCheckboxes />
      </div>
      <McHeadsContainer />
    </div>
    <div id="iFrameAndDisclaimerContainer">
      <IFrameDisplayer />
      <div id="iFrameDisclaimer">
        <small>
          Dots that are too close together may display the wrong coin value tooltip. Clicking on a dot goes to the correct stream moment guaranteed. You can scroll on the graph to get a better overview.
        </small>
      </div>
    </div>
  </div>
</div>