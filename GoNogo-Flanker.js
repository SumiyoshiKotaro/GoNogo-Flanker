/*********************** 
 * Gonogo-Flanker *
 ***********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'GoNogo-Flanker';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(StartRoutineBegin());
flowScheduler.add(StartRoutineEachFrame());
flowScheduler.add(StartRoutineEnd());
flowScheduler.add(GoNogo_StartScreenRoutineBegin());
flowScheduler.add(GoNogo_StartScreenRoutineEachFrame());
flowScheduler.add(GoNogo_StartScreenRoutineEnd());
flowScheduler.add(GoNogo_StartBlankRoutineBegin());
flowScheduler.add(GoNogo_StartBlankRoutineEachFrame());
flowScheduler.add(GoNogo_StartBlankRoutineEnd());
const GoNogo_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(GoNogo_LoopLoopBegin(GoNogo_LoopLoopScheduler));
flowScheduler.add(GoNogo_LoopLoopScheduler);
flowScheduler.add(GoNogo_LoopLoopEnd);


flowScheduler.add(GoNogo_EndScreenRoutineBegin());
flowScheduler.add(GoNogo_EndScreenRoutineEachFrame());
flowScheduler.add(GoNogo_EndScreenRoutineEnd());
flowScheduler.add(Flanker_StartScreenRoutineBegin());
flowScheduler.add(Flanker_StartScreenRoutineEachFrame());
flowScheduler.add(Flanker_StartScreenRoutineEnd());
flowScheduler.add(Flanker_StartBlankRoutineBegin());
flowScheduler.add(Flanker_StartBlankRoutineEachFrame());
flowScheduler.add(Flanker_StartBlankRoutineEnd());
const Flanker_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Flanker_LoopLoopBegin(Flanker_LoopLoopScheduler));
flowScheduler.add(Flanker_LoopLoopScheduler);
flowScheduler.add(Flanker_LoopLoopEnd);


flowScheduler.add(Flanker_EndScreenRoutineBegin());
flowScheduler.add(Flanker_EndScreenRoutineEachFrame());
flowScheduler.add(Flanker_EndScreenRoutineEnd());
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'GoNogoTask80.xlsx', 'path': 'GoNogoTask80.xlsx'},
    {'name': 'FlankerTask160.xlsx', 'path': 'FlankerTask160.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var StartClock;
var Start_key_resp;
var Start_text;
var GoNogo_StartScreenClock;
var GoNogo_StartScreen_text;
var GoNogo_StartScreen_key_resp;
var GoNogo_StartBlankClock;
var GoNogo_TrialClock;
var GoNogo_Trial_resp;
var GoNogo_Trial_Stim;
var GoNogo_EndScreenClock;
var GoNogo_EndScreen_text;
var GoNogo_EndScreen_key_resp;
var Flanker_StartScreenClock;
var Flanker_StartScreen_text;
var Flanker_StartScreen_key_resp;
var Flanker_StartBlankClock;
var Flanker_TrialClock;
var Flanker_Trial_Stim;
var Flanker_Trial_key_resp;
var Flanker_EndScreenClock;
var Flanker_EndScreen_text;
var Flanker_EndScreen_key_resp;
var EndClock;
var End_text;
var End_key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Start"
  StartClock = new util.Clock();
  Start_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Start_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Start_text',
    text: 'これから2種類の課題に取り組んでもらいます。\n所用時間はおおよそ10分です。\n\n各課題の前に表示されるアナウンスをよく読んで取り組んでください。\n\nスペースキーを押すと、一つ目の課題のアナウンスが表示されます。\n\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "GoNogo_StartScreen"
  GoNogo_StartScreenClock = new util.Clock();
  GoNogo_StartScreen_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'GoNogo_StartScreen_text',
    text: '以下の内容を確認してください。\n\n利き手人差し指をスペースキー上においてください。\n\n画面中央に「〇」が一瞬呈示されます。\n\n〇の色が、\n青のとき、スペースキーを押してください。\n赤のとき、何も押さないでください。\n\nなるべく素早く、正確に反応してください。\n課題は3分程度です。\n\nスペースキーを押すと、課題が始まります。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  GoNogo_StartScreen_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GoNogo_StartBlank"
  GoNogo_StartBlankClock = new util.Clock();
  // Initialize components for Routine "GoNogo_Trial"
  GoNogo_TrialClock = new util.Clock();
  GoNogo_Trial_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  GoNogo_Trial_Stim = new visual.Polygon({
    win: psychoJS.window, name: 'GoNogo_Trial_Stim', 
    edges: 100, size:[0.4, 0.4],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "GoNogo_EndScreen"
  GoNogo_EndScreenClock = new util.Clock();
  GoNogo_EndScreen_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'GoNogo_EndScreen_text',
    text: '一つ目の課題は終了です。\n\nスペースキーを押すと、次の課題の説明が表示されます。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  GoNogo_EndScreen_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Flanker_StartScreen"
  Flanker_StartScreenClock = new util.Clock();
  Flanker_StartScreen_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Flanker_StartScreen_text',
    text: '以下の内容を確認してください。\n\n左右の人差し指をそれぞれFキー、Jキー上においてください。\n\n画面中央に「5つの矢印」が一瞬呈示されます。\n真ん中の矢印の向きに従って、FキーもしくはJキーを押してください。\n\n例（課題ではいずれか一つが呈示されます。）\n<<<<<：左（Fキー）\u3000>>>>>：右（Jキー）\n>><>>：左（Fキー）\u3000<<><<：右（Jキー）\n\nなるべく早く正確に反応してください。\n課題は7分程度です。\n\nFキーもしくはJキーを押すと、課題が始まります。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Flanker_StartScreen_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Flanker_StartBlank"
  Flanker_StartBlankClock = new util.Clock();
  // Initialize components for Routine "Flanker_Trial"
  Flanker_TrialClock = new util.Clock();
  Flanker_Trial_Stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'Flanker_Trial_Stim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.3,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Flanker_Trial_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Flanker_EndScreen"
  Flanker_EndScreenClock = new util.Clock();
  Flanker_EndScreen_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Flanker_EndScreen_text',
    text: 'お疲れさまでした。課題は以上で終了です。\n\n次のアナウンスに従って、データの送信を行ってください。\n\nスペースキーを押すと、次のアナウンスが表示されます。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Flanker_EndScreen_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  End_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'End_text',
    text: '課題は終了しました。\n\nデータファイルが自動でダウンロードされます。\nGoogleフォームに添付して送信してください。\n\n不具合や連絡事項があれば、フォーム内で記入してください。\n\nスペースキーを押すと、送信フォームに移動します。\nご協力ありがとうございました。\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  End_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var StartMaxDurationReached;
var _Start_key_resp_allKeys;
var StartMaxDuration;
var StartComponents;
function StartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    StartClock.reset();
    routineTimer.reset();
    StartMaxDurationReached = false;
    // update component parameters for each repeat
    Start_key_resp.keys = undefined;
    Start_key_resp.rt = undefined;
    _Start_key_resp_allKeys = [];
    psychoJS.experiment.addData('Start.started', globalClock.getTime());
    StartMaxDuration = null
    // keep track of which components have finished
    StartComponents = [];
    StartComponents.push(Start_key_resp);
    StartComponents.push(Start_text);
    
    for (const thisComponent of StartComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function StartRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Start' ---
    // get current time
    t = StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Start_key_resp* updates
    if (t >= 0.0 && Start_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Start_key_resp.tStart = t;  // (not accounting for frame time here)
      Start_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      Start_key_resp.clock.reset();
      Start_key_resp.start();
      Start_key_resp.clearEvents();
    }
    
    if (Start_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Start_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _Start_key_resp_allKeys = _Start_key_resp_allKeys.concat(theseKeys);
      if (_Start_key_resp_allKeys.length > 0) {
        Start_key_resp.keys = _Start_key_resp_allKeys[0].name;  // just the first key pressed
        Start_key_resp.rt = _Start_key_resp_allKeys[0].rt;
        Start_key_resp.duration = _Start_key_resp_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Start_text* updates
    if (t >= 0.0 && Start_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Start_text.tStart = t;  // (not accounting for frame time here)
      Start_text.frameNStart = frameN;  // exact frame index
      
      Start_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of StartComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StartRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Start' ---
    for (const thisComponent of StartComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Start.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Start_key_resp.corr, level);
    }
    psychoJS.experiment.addData('Start_key_resp.keys', Start_key_resp.keys);
    if (typeof Start_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Start_key_resp.rt', Start_key_resp.rt);
        psychoJS.experiment.addData('Start_key_resp.duration', Start_key_resp.duration);
        routineTimer.reset();
        }
    
    Start_key_resp.stop();
    // the Routine "Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoNogo_StartScreenMaxDurationReached;
var _GoNogo_StartScreen_key_resp_allKeys;
var GoNogo_StartScreenMaxDuration;
var GoNogo_StartScreenComponents;
function GoNogo_StartScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GoNogo_StartScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    GoNogo_StartScreenClock.reset();
    routineTimer.reset();
    GoNogo_StartScreenMaxDurationReached = false;
    // update component parameters for each repeat
    GoNogo_StartScreen_key_resp.keys = undefined;
    GoNogo_StartScreen_key_resp.rt = undefined;
    _GoNogo_StartScreen_key_resp_allKeys = [];
    psychoJS.experiment.addData('GoNogo_StartScreen.started', globalClock.getTime());
    GoNogo_StartScreenMaxDuration = null
    // keep track of which components have finished
    GoNogo_StartScreenComponents = [];
    GoNogo_StartScreenComponents.push(GoNogo_StartScreen_text);
    GoNogo_StartScreenComponents.push(GoNogo_StartScreen_key_resp);
    
    for (const thisComponent of GoNogo_StartScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GoNogo_StartScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GoNogo_StartScreen' ---
    // get current time
    t = GoNogo_StartScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *GoNogo_StartScreen_text* updates
    if (t >= 0.0 && GoNogo_StartScreen_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GoNogo_StartScreen_text.tStart = t;  // (not accounting for frame time here)
      GoNogo_StartScreen_text.frameNStart = frameN;  // exact frame index
      
      GoNogo_StartScreen_text.setAutoDraw(true);
    }
    
    
    // *GoNogo_StartScreen_key_resp* updates
    if (t >= 0.0 && GoNogo_StartScreen_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GoNogo_StartScreen_key_resp.tStart = t;  // (not accounting for frame time here)
      GoNogo_StartScreen_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      GoNogo_StartScreen_key_resp.clock.reset();
      GoNogo_StartScreen_key_resp.start();
      GoNogo_StartScreen_key_resp.clearEvents();
    }
    
    if (GoNogo_StartScreen_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = GoNogo_StartScreen_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _GoNogo_StartScreen_key_resp_allKeys = _GoNogo_StartScreen_key_resp_allKeys.concat(theseKeys);
      if (_GoNogo_StartScreen_key_resp_allKeys.length > 0) {
        GoNogo_StartScreen_key_resp.keys = _GoNogo_StartScreen_key_resp_allKeys[0].name;  // just the first key pressed
        GoNogo_StartScreen_key_resp.rt = _GoNogo_StartScreen_key_resp_allKeys[0].rt;
        GoNogo_StartScreen_key_resp.duration = _GoNogo_StartScreen_key_resp_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoNogo_StartScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoNogo_StartScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GoNogo_StartScreen' ---
    for (const thisComponent of GoNogo_StartScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('GoNogo_StartScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(GoNogo_StartScreen_key_resp.corr, level);
    }
    psychoJS.experiment.addData('GoNogo_StartScreen_key_resp.keys', GoNogo_StartScreen_key_resp.keys);
    if (typeof GoNogo_StartScreen_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('GoNogo_StartScreen_key_resp.rt', GoNogo_StartScreen_key_resp.rt);
        psychoJS.experiment.addData('GoNogo_StartScreen_key_resp.duration', GoNogo_StartScreen_key_resp.duration);
        routineTimer.reset();
        }
    
    GoNogo_StartScreen_key_resp.stop();
    // the Routine "GoNogo_StartScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoNogo_StartBlankMaxDurationReached;
var GoNogo_StartBlankMaxDuration;
var GoNogo_StartBlankComponents;
function GoNogo_StartBlankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GoNogo_StartBlank' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    GoNogo_StartBlankClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    GoNogo_StartBlankMaxDurationReached = false;
    // update component parameters for each repeat
    GoNogo_StartBlankMaxDuration = 2
    // keep track of which components have finished
    GoNogo_StartBlankComponents = [];
    
    for (const thisComponent of GoNogo_StartBlankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GoNogo_StartBlankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GoNogo_StartBlank' ---
    // get current time
    t = GoNogo_StartBlankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > GoNogo_StartBlankMaxDuration) {
        GoNogo_StartBlankMaxDurationReached = true
        continueRoutine = false
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoNogo_StartBlankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoNogo_StartBlankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GoNogo_StartBlank' ---
    for (const thisComponent of GoNogo_StartBlankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (GoNogo_StartBlankMaxDurationReached) {
        GoNogo_StartBlankClock.add(GoNogo_StartBlankMaxDuration);
    } else {
        GoNogo_StartBlankClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoNogo_Loop;
function GoNogo_LoopLoopBegin(GoNogo_LoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    GoNogo_Loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'GoNogoTask80.xlsx',
      seed: undefined, name: 'GoNogo_Loop'
    });
    psychoJS.experiment.addLoop(GoNogo_Loop); // add the loop to the experiment
    currentLoop = GoNogo_Loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisGoNogo_Loop of GoNogo_Loop) {
      snapshot = GoNogo_Loop.getSnapshot();
      GoNogo_LoopLoopScheduler.add(importConditions(snapshot));
      GoNogo_LoopLoopScheduler.add(GoNogo_TrialRoutineBegin(snapshot));
      GoNogo_LoopLoopScheduler.add(GoNogo_TrialRoutineEachFrame());
      GoNogo_LoopLoopScheduler.add(GoNogo_TrialRoutineEnd(snapshot));
      GoNogo_LoopLoopScheduler.add(GoNogo_LoopLoopEndIteration(GoNogo_LoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function GoNogo_LoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(GoNogo_Loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function GoNogo_LoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Flanker_Loop;
function Flanker_LoopLoopBegin(Flanker_LoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Flanker_Loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'FlankerTask160.xlsx',
      seed: undefined, name: 'Flanker_Loop'
    });
    psychoJS.experiment.addLoop(Flanker_Loop); // add the loop to the experiment
    currentLoop = Flanker_Loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFlanker_Loop of Flanker_Loop) {
      snapshot = Flanker_Loop.getSnapshot();
      Flanker_LoopLoopScheduler.add(importConditions(snapshot));
      Flanker_LoopLoopScheduler.add(Flanker_TrialRoutineBegin(snapshot));
      Flanker_LoopLoopScheduler.add(Flanker_TrialRoutineEachFrame());
      Flanker_LoopLoopScheduler.add(Flanker_TrialRoutineEnd(snapshot));
      Flanker_LoopLoopScheduler.add(Flanker_LoopLoopEndIteration(Flanker_LoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Flanker_LoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Flanker_Loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Flanker_LoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var GoNogo_TrialMaxDurationReached;
var _GoNogo_Trial_resp_allKeys;
var GoNogo_TrialMaxDuration;
var GoNogo_TrialComponents;
function GoNogo_TrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GoNogo_Trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    GoNogo_TrialClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    GoNogo_TrialMaxDurationReached = false;
    // update component parameters for each repeat
    GoNogo_Trial_resp.keys = undefined;
    GoNogo_Trial_resp.rt = undefined;
    _GoNogo_Trial_resp_allKeys = [];
    GoNogo_Trial_Stim.setFillColor(new util.Color(color));
    GoNogo_Trial_Stim.setLineColor(new util.Color(color));
    psychoJS.experiment.addData('GoNogo_Trial.started', globalClock.getTime());
    GoNogo_TrialMaxDuration = null
    // keep track of which components have finished
    GoNogo_TrialComponents = [];
    GoNogo_TrialComponents.push(GoNogo_Trial_resp);
    GoNogo_TrialComponents.push(GoNogo_Trial_Stim);
    
    for (const thisComponent of GoNogo_TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function GoNogo_TrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GoNogo_Trial' ---
    // get current time
    t = GoNogo_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *GoNogo_Trial_resp* updates
    if (t >= 0.0 && GoNogo_Trial_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GoNogo_Trial_resp.tStart = t;  // (not accounting for frame time here)
      GoNogo_Trial_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { GoNogo_Trial_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { GoNogo_Trial_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { GoNogo_Trial_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (GoNogo_Trial_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      GoNogo_Trial_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (GoNogo_Trial_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = GoNogo_Trial_resp.getKeys({keyList: ['space'], waitRelease: false});
      _GoNogo_Trial_resp_allKeys = _GoNogo_Trial_resp_allKeys.concat(theseKeys);
      if (_GoNogo_Trial_resp_allKeys.length > 0) {
        GoNogo_Trial_resp.keys = _GoNogo_Trial_resp_allKeys[0].name;  // just the first key pressed
        GoNogo_Trial_resp.rt = _GoNogo_Trial_resp_allKeys[0].rt;
        GoNogo_Trial_resp.duration = _GoNogo_Trial_resp_allKeys[0].duration;
        // was this correct?
        if (GoNogo_Trial_resp.keys == resp) {
            GoNogo_Trial_resp.corr = 1;
        } else {
            GoNogo_Trial_resp.corr = 0;
        }
      }
    }
    
    
    // *GoNogo_Trial_Stim* updates
    if (t >= 0.0 && GoNogo_Trial_Stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GoNogo_Trial_Stim.tStart = t;  // (not accounting for frame time here)
      GoNogo_Trial_Stim.frameNStart = frameN;  // exact frame index
      
      GoNogo_Trial_Stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (GoNogo_Trial_Stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      GoNogo_Trial_Stim.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoNogo_TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoNogo_TrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GoNogo_Trial' ---
    for (const thisComponent of GoNogo_TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('GoNogo_Trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (GoNogo_Trial_resp.keys === undefined) {
      if (['None','none',undefined].includes(resp)) {
         GoNogo_Trial_resp.corr = 1;  // correct non-response
      } else {
         GoNogo_Trial_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(GoNogo_Trial_resp.corr, level);
    }
    psychoJS.experiment.addData('GoNogo_Trial_resp.keys', GoNogo_Trial_resp.keys);
    psychoJS.experiment.addData('GoNogo_Trial_resp.corr', GoNogo_Trial_resp.corr);
    if (typeof GoNogo_Trial_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('GoNogo_Trial_resp.rt', GoNogo_Trial_resp.rt);
        psychoJS.experiment.addData('GoNogo_Trial_resp.duration', GoNogo_Trial_resp.duration);
        }
    
    GoNogo_Trial_resp.stop();
    if (GoNogo_TrialMaxDurationReached) {
        GoNogo_TrialClock.add(GoNogo_TrialMaxDuration);
    } else {
        GoNogo_TrialClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoNogo_EndScreenMaxDurationReached;
var _GoNogo_EndScreen_key_resp_allKeys;
var GoNogo_EndScreenMaxDuration;
var GoNogo_EndScreenComponents;
function GoNogo_EndScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GoNogo_EndScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    GoNogo_EndScreenClock.reset();
    routineTimer.reset();
    GoNogo_EndScreenMaxDurationReached = false;
    // update component parameters for each repeat
    GoNogo_EndScreen_key_resp.keys = undefined;
    GoNogo_EndScreen_key_resp.rt = undefined;
    _GoNogo_EndScreen_key_resp_allKeys = [];
    psychoJS.experiment.addData('GoNogo_EndScreen.started', globalClock.getTime());
    GoNogo_EndScreenMaxDuration = null
    // keep track of which components have finished
    GoNogo_EndScreenComponents = [];
    GoNogo_EndScreenComponents.push(GoNogo_EndScreen_text);
    GoNogo_EndScreenComponents.push(GoNogo_EndScreen_key_resp);
    
    for (const thisComponent of GoNogo_EndScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GoNogo_EndScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GoNogo_EndScreen' ---
    // get current time
    t = GoNogo_EndScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *GoNogo_EndScreen_text* updates
    if (t >= 0.0 && GoNogo_EndScreen_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GoNogo_EndScreen_text.tStart = t;  // (not accounting for frame time here)
      GoNogo_EndScreen_text.frameNStart = frameN;  // exact frame index
      
      GoNogo_EndScreen_text.setAutoDraw(true);
    }
    
    
    // *GoNogo_EndScreen_key_resp* updates
    if (t >= 0.0 && GoNogo_EndScreen_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GoNogo_EndScreen_key_resp.tStart = t;  // (not accounting for frame time here)
      GoNogo_EndScreen_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      GoNogo_EndScreen_key_resp.clock.reset();
      GoNogo_EndScreen_key_resp.start();
      GoNogo_EndScreen_key_resp.clearEvents();
    }
    
    if (GoNogo_EndScreen_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = GoNogo_EndScreen_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _GoNogo_EndScreen_key_resp_allKeys = _GoNogo_EndScreen_key_resp_allKeys.concat(theseKeys);
      if (_GoNogo_EndScreen_key_resp_allKeys.length > 0) {
        GoNogo_EndScreen_key_resp.keys = _GoNogo_EndScreen_key_resp_allKeys[0].name;  // just the first key pressed
        GoNogo_EndScreen_key_resp.rt = _GoNogo_EndScreen_key_resp_allKeys[0].rt;
        GoNogo_EndScreen_key_resp.duration = _GoNogo_EndScreen_key_resp_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoNogo_EndScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoNogo_EndScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GoNogo_EndScreen' ---
    for (const thisComponent of GoNogo_EndScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('GoNogo_EndScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(GoNogo_EndScreen_key_resp.corr, level);
    }
    psychoJS.experiment.addData('GoNogo_EndScreen_key_resp.keys', GoNogo_EndScreen_key_resp.keys);
    if (typeof GoNogo_EndScreen_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('GoNogo_EndScreen_key_resp.rt', GoNogo_EndScreen_key_resp.rt);
        psychoJS.experiment.addData('GoNogo_EndScreen_key_resp.duration', GoNogo_EndScreen_key_resp.duration);
        routineTimer.reset();
        }
    
    GoNogo_EndScreen_key_resp.stop();
    // the Routine "GoNogo_EndScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Flanker_StartScreenMaxDurationReached;
var _Flanker_StartScreen_key_resp_allKeys;
var Flanker_StartScreenMaxDuration;
var Flanker_StartScreenComponents;
function Flanker_StartScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Flanker_StartScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Flanker_StartScreenClock.reset();
    routineTimer.reset();
    Flanker_StartScreenMaxDurationReached = false;
    // update component parameters for each repeat
    Flanker_StartScreen_key_resp.keys = undefined;
    Flanker_StartScreen_key_resp.rt = undefined;
    _Flanker_StartScreen_key_resp_allKeys = [];
    psychoJS.experiment.addData('Flanker_StartScreen.started', globalClock.getTime());
    Flanker_StartScreenMaxDuration = null
    // keep track of which components have finished
    Flanker_StartScreenComponents = [];
    Flanker_StartScreenComponents.push(Flanker_StartScreen_text);
    Flanker_StartScreenComponents.push(Flanker_StartScreen_key_resp);
    
    for (const thisComponent of Flanker_StartScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Flanker_StartScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Flanker_StartScreen' ---
    // get current time
    t = Flanker_StartScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Flanker_StartScreen_text* updates
    if (t >= 0.0 && Flanker_StartScreen_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Flanker_StartScreen_text.tStart = t;  // (not accounting for frame time here)
      Flanker_StartScreen_text.frameNStart = frameN;  // exact frame index
      
      Flanker_StartScreen_text.setAutoDraw(true);
    }
    
    
    // *Flanker_StartScreen_key_resp* updates
    if (t >= 0.0 && Flanker_StartScreen_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Flanker_StartScreen_key_resp.tStart = t;  // (not accounting for frame time here)
      Flanker_StartScreen_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      Flanker_StartScreen_key_resp.clock.reset();
      Flanker_StartScreen_key_resp.start();
      Flanker_StartScreen_key_resp.clearEvents();
    }
    
    if (Flanker_StartScreen_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Flanker_StartScreen_key_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _Flanker_StartScreen_key_resp_allKeys = _Flanker_StartScreen_key_resp_allKeys.concat(theseKeys);
      if (_Flanker_StartScreen_key_resp_allKeys.length > 0) {
        Flanker_StartScreen_key_resp.keys = _Flanker_StartScreen_key_resp_allKeys[0].name;  // just the first key pressed
        Flanker_StartScreen_key_resp.rt = _Flanker_StartScreen_key_resp_allKeys[0].rt;
        Flanker_StartScreen_key_resp.duration = _Flanker_StartScreen_key_resp_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Flanker_StartScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Flanker_StartScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Flanker_StartScreen' ---
    for (const thisComponent of Flanker_StartScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Flanker_StartScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Flanker_StartScreen_key_resp.corr, level);
    }
    psychoJS.experiment.addData('Flanker_StartScreen_key_resp.keys', Flanker_StartScreen_key_resp.keys);
    if (typeof Flanker_StartScreen_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Flanker_StartScreen_key_resp.rt', Flanker_StartScreen_key_resp.rt);
        psychoJS.experiment.addData('Flanker_StartScreen_key_resp.duration', Flanker_StartScreen_key_resp.duration);
        routineTimer.reset();
        }
    
    Flanker_StartScreen_key_resp.stop();
    // the Routine "Flanker_StartScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Flanker_StartBlankMaxDurationReached;
var Flanker_StartBlankMaxDuration;
var Flanker_StartBlankComponents;
function Flanker_StartBlankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Flanker_StartBlank' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Flanker_StartBlankClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    Flanker_StartBlankMaxDurationReached = false;
    // update component parameters for each repeat
    Flanker_StartBlankMaxDuration = 2
    // keep track of which components have finished
    Flanker_StartBlankComponents = [];
    
    for (const thisComponent of Flanker_StartBlankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Flanker_StartBlankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Flanker_StartBlank' ---
    // get current time
    t = Flanker_StartBlankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > Flanker_StartBlankMaxDuration) {
        Flanker_StartBlankMaxDurationReached = true
        continueRoutine = false
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Flanker_StartBlankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Flanker_StartBlankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Flanker_StartBlank' ---
    for (const thisComponent of Flanker_StartBlankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (Flanker_StartBlankMaxDurationReached) {
        Flanker_StartBlankClock.add(Flanker_StartBlankMaxDuration);
    } else {
        Flanker_StartBlankClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Flanker_TrialMaxDurationReached;
var _Flanker_Trial_key_resp_allKeys;
var Flanker_TrialMaxDuration;
var Flanker_TrialComponents;
function Flanker_TrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Flanker_Trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Flanker_TrialClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    Flanker_TrialMaxDurationReached = false;
    // update component parameters for each repeat
    Flanker_Trial_Stim.setText(stim);
    Flanker_Trial_key_resp.keys = undefined;
    Flanker_Trial_key_resp.rt = undefined;
    _Flanker_Trial_key_resp_allKeys = [];
    psychoJS.experiment.addData('Flanker_Trial.started', globalClock.getTime());
    Flanker_TrialMaxDuration = null
    // keep track of which components have finished
    Flanker_TrialComponents = [];
    Flanker_TrialComponents.push(Flanker_Trial_Stim);
    Flanker_TrialComponents.push(Flanker_Trial_key_resp);
    
    for (const thisComponent of Flanker_TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Flanker_TrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Flanker_Trial' ---
    // get current time
    t = Flanker_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Flanker_Trial_Stim* updates
    if (t >= 0.0 && Flanker_Trial_Stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Flanker_Trial_Stim.tStart = t;  // (not accounting for frame time here)
      Flanker_Trial_Stim.frameNStart = frameN;  // exact frame index
      
      Flanker_Trial_Stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Flanker_Trial_Stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Flanker_Trial_Stim.setAutoDraw(false);
    }
    
    
    // *Flanker_Trial_key_resp* updates
    if (t >= 0.0 && Flanker_Trial_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Flanker_Trial_key_resp.tStart = t;  // (not accounting for frame time here)
      Flanker_Trial_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Flanker_Trial_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Flanker_Trial_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Flanker_Trial_key_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Flanker_Trial_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Flanker_Trial_key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (Flanker_Trial_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Flanker_Trial_key_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _Flanker_Trial_key_resp_allKeys = _Flanker_Trial_key_resp_allKeys.concat(theseKeys);
      if (_Flanker_Trial_key_resp_allKeys.length > 0) {
        Flanker_Trial_key_resp.keys = _Flanker_Trial_key_resp_allKeys[0].name;  // just the first key pressed
        Flanker_Trial_key_resp.rt = _Flanker_Trial_key_resp_allKeys[0].rt;
        Flanker_Trial_key_resp.duration = _Flanker_Trial_key_resp_allKeys[0].duration;
        // was this correct?
        if (Flanker_Trial_key_resp.keys == resp) {
            Flanker_Trial_key_resp.corr = 1;
        } else {
            Flanker_Trial_key_resp.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Flanker_TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Flanker_TrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Flanker_Trial' ---
    for (const thisComponent of Flanker_TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Flanker_Trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Flanker_Trial_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(resp)) {
         Flanker_Trial_key_resp.corr = 1;  // correct non-response
      } else {
         Flanker_Trial_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Flanker_Trial_key_resp.corr, level);
    }
    psychoJS.experiment.addData('Flanker_Trial_key_resp.keys', Flanker_Trial_key_resp.keys);
    psychoJS.experiment.addData('Flanker_Trial_key_resp.corr', Flanker_Trial_key_resp.corr);
    if (typeof Flanker_Trial_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Flanker_Trial_key_resp.rt', Flanker_Trial_key_resp.rt);
        psychoJS.experiment.addData('Flanker_Trial_key_resp.duration', Flanker_Trial_key_resp.duration);
        }
    
    Flanker_Trial_key_resp.stop();
    if (Flanker_TrialMaxDurationReached) {
        Flanker_TrialClock.add(Flanker_TrialMaxDuration);
    } else {
        Flanker_TrialClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Flanker_EndScreenMaxDurationReached;
var _Flanker_EndScreen_key_resp_allKeys;
var Flanker_EndScreenMaxDuration;
var Flanker_EndScreenComponents;
function Flanker_EndScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Flanker_EndScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Flanker_EndScreenClock.reset();
    routineTimer.reset();
    Flanker_EndScreenMaxDurationReached = false;
    // update component parameters for each repeat
    Flanker_EndScreen_key_resp.keys = undefined;
    Flanker_EndScreen_key_resp.rt = undefined;
    _Flanker_EndScreen_key_resp_allKeys = [];
    psychoJS.experiment.addData('Flanker_EndScreen.started', globalClock.getTime());
    Flanker_EndScreenMaxDuration = null
    // keep track of which components have finished
    Flanker_EndScreenComponents = [];
    Flanker_EndScreenComponents.push(Flanker_EndScreen_text);
    Flanker_EndScreenComponents.push(Flanker_EndScreen_key_resp);
    
    for (const thisComponent of Flanker_EndScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Flanker_EndScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Flanker_EndScreen' ---
    // get current time
    t = Flanker_EndScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Flanker_EndScreen_text* updates
    if (t >= 0.0 && Flanker_EndScreen_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Flanker_EndScreen_text.tStart = t;  // (not accounting for frame time here)
      Flanker_EndScreen_text.frameNStart = frameN;  // exact frame index
      
      Flanker_EndScreen_text.setAutoDraw(true);
    }
    
    
    // *Flanker_EndScreen_key_resp* updates
    if (t >= 0.0 && Flanker_EndScreen_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Flanker_EndScreen_key_resp.tStart = t;  // (not accounting for frame time here)
      Flanker_EndScreen_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Flanker_EndScreen_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Flanker_EndScreen_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Flanker_EndScreen_key_resp.clearEvents(); });
    }
    
    if (Flanker_EndScreen_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Flanker_EndScreen_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _Flanker_EndScreen_key_resp_allKeys = _Flanker_EndScreen_key_resp_allKeys.concat(theseKeys);
      if (_Flanker_EndScreen_key_resp_allKeys.length > 0) {
        Flanker_EndScreen_key_resp.keys = _Flanker_EndScreen_key_resp_allKeys[0].name;  // just the first key pressed
        Flanker_EndScreen_key_resp.rt = _Flanker_EndScreen_key_resp_allKeys[0].rt;
        Flanker_EndScreen_key_resp.duration = _Flanker_EndScreen_key_resp_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Flanker_EndScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Flanker_EndScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Flanker_EndScreen' ---
    for (const thisComponent of Flanker_EndScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Flanker_EndScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Flanker_EndScreen_key_resp.corr, level);
    }
    psychoJS.experiment.addData('Flanker_EndScreen_key_resp.keys', Flanker_EndScreen_key_resp.keys);
    if (typeof Flanker_EndScreen_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Flanker_EndScreen_key_resp.rt', Flanker_EndScreen_key_resp.rt);
        psychoJS.experiment.addData('Flanker_EndScreen_key_resp.duration', Flanker_EndScreen_key_resp.duration);
        routineTimer.reset();
        }
    
    Flanker_EndScreen_key_resp.stop();
    // the Routine "Flanker_EndScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var _End_key_resp_allKeys;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    EndClock.reset();
    routineTimer.reset();
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    End_key_resp.keys = undefined;
    End_key_resp.rt = undefined;
    _End_key_resp_allKeys = [];
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(End_text);
    EndComponents.push(End_key_resp);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *End_text* updates
    if (t >= 0.0 && End_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      End_text.tStart = t;  // (not accounting for frame time here)
      End_text.frameNStart = frameN;  // exact frame index
      
      End_text.setAutoDraw(true);
    }
    
    
    // *End_key_resp* updates
    if (t >= 0.0 && End_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      End_key_resp.tStart = t;  // (not accounting for frame time here)
      End_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      End_key_resp.clock.reset();
      End_key_resp.start();
      End_key_resp.clearEvents();
    }
    
    if (End_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = End_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _End_key_resp_allKeys = _End_key_resp_allKeys.concat(theseKeys);
      if (_End_key_resp_allKeys.length > 0) {
        End_key_resp.keys = _End_key_resp_allKeys[0].name;  // just the first key pressed
        End_key_resp.rt = _End_key_resp_allKeys[0].rt;
        End_key_resp.duration = _End_key_resp_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(End_key_resp.corr, level);
    }
    psychoJS.experiment.addData('End_key_resp.keys', End_key_resp.keys);
    if (typeof End_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('End_key_resp.rt', End_key_resp.rt);
        psychoJS.experiment.addData('End_key_resp.duration', End_key_resp.duration);
        routineTimer.reset();
        }
    
    End_key_resp.stop();
    if (End_key_resp.keys === 'space') {
      window.location.href = "https://forms.gle/oS5BUGGbKxAyVjqq8";
    }
    
    
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
