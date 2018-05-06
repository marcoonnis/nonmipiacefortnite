//number of items on database
//// TODO: Atm data is hard-coded. assign their value from php (if you are using it)

var scenarioCount = 9;
var trueOrFalseCount = 5;
var bipolarCount = 11;
var totalCount = 25;

//progress bars references
var scenariosBar = new ProgressBar.SemiCircle(".progressbar-scenarios", {
  strokeWidth: 9,
  easing: 'easeInOut',
  duration: 1400,
  color: '#0278ae',
  trailColor: '#303030',
  trailWidth: 6,
  svgStyle: null
});

var trueOrFalseBar = new ProgressBar.SemiCircle(".progressbar-trueOrFalse", {
  strokeWidth: 9,
  easing: 'easeInOut',
  duration: 1400,
  color: '#49b1d7',
  trailColor: '#303030',
  trailWidth: 6,
  svgStyle: null
});

var bipolarBar = new ProgressBar.SemiCircle(".progressbar-bipolar", {
  strokeWidth: 9,
  easing: 'easeInOut',
  duration: 1400,
  color: '#46d89d',
  trailColor: '#303030',
  trailWidth: 6,
  svgStyle: null
});

//animate with some random sumbers.
scenariosBar.animate(.35);  // Number from 0.0 to 1.0
trueOrFalseBar.animate(.20);
bipolarBar.animate(.45);

//TO UPDATE PROGRESSBARS
function updateScenario() {
  var percentValue = (scenarioCount*100)/totalCount;
  scenariosBar.animate(percentValue);
}

function updateTrueOrFalse() {
  var percentValue = (trueOrFalseCount*100)/totalCount;
  scenariosBar.animate(percentValue);
}

function updateBipolar() {
  var percentValue = (bipolarCount*100)/totalCount;
  scenariosBar.animate(percentValue);
}

//TO UPDATE THE NUMBERS RELATIVES WITH NUMBERS OF QUESTIONS
function updateScenarioTextCount()
{
  document.getElementsByClassName('scenario-number').innerHTML = scenarioCount;
}

function updateTrueFalseTextCount()
{
  document.getElementsByClassName('trueOrFalse-number').innerHTML = trueOrFalseCount;
}

function updateBipolarTextCount()
{
  document.getElementsByClassName('bipolar-number').innerHTML = bipolarCount;
}

//FUNCTION CALLED EVERY SECONDS
$( document ).ready(function() {

  //hide all divs
  $('.targetDiv').hide();
  //show the first one as default
  $('#div1').slideToggle('open');
  $(".question-content").slideUp("fast");
  //set a listener for click on inline bar links.
  $('.inlineBtn').click(function () {
    $(".targetDiv").hide();
      // Show your active tab (read from your data attribute)
      $('#div' + $(this).attr('target')).slideToggle('open');
      // Highlight the selected tab
      $('a.inlineBtn.highlight').removeClass('highlight');
      $(this).closest('a').addClass('highlight');
  });

//click on a question to see its answers
  $('.question-header').click(function () {
    $content = $(this).next();

    if(!($content.is(":visible")))
    {
      $(".question-content").slideUp("fast");
      $content.slideToggle(500);
    }
    else
    {
      $(".question-content").slideUp("fast");
    }
  });

});
