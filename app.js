import Rive from 'https://unpkg.com/@rive-app/canvas@2.7.2';

const links = {
  Research: 'https://yourdomain.com/research',
  Motion: 'https://yourdomain.com/motion',
  Home: 'https://ohio-ets.com/home',
  Work: 'https://yourdomain.com/work'
};

const rive = new Rive({
    src: 'https://c984b3fe-1e92-4a39-99f1-f400540458f4.usrfiles.com/ugd/c984b3_531289cb5a4b43218302ac7db649c3f1.riv',
    canvas: document.getElementById('rive-canvas'),
    autoplay: true,
    stateMachines: ['State Machine 1'],
  onLoad: () => {
    const inputs = rive.stateMachineInputs('State Machine 1');

    const triggers = {
      Research: inputs.find(i => i.name === 'Research'),
      Motion: inputs.find(i => i.name === 'Motion'),
      Home: inputs.find(i => i.name === 'Home'),
      Work: inputs.find(i => i.name === 'Work')
    };

    document.getElementById('rive-canvas').addEventListener('click', () => {
      for (const key in triggers) {
        if (triggers[key]?.fired) {
          window.location.href = links[key];
        }
      }
    });
  }
});
