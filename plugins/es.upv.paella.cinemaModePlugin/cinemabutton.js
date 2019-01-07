paella.addPlugin(function() {
	return class CinemaModePlugin extends paella.ButtonPlugin {
		constructor() {
			super();
			this.playIconClass = 'icon-airplay';
			this.pauseIconClass = 'icon-airplay';
			this.playSubclass = 'playButton';
			this.pauseSubclass = 'pauseButton';
		}

		getAlignment() { return 'right'; }
		getSubclass() { return this.playSubclass; }
		getIconClass() { return this.playIconClass; }
		getName() { return "es.upv.paella.cinemaModePlugin"; }
		getDefaultToolTip() { return base.dictionary.translate("Cinema Mode"); }
		getIndex() { return 110; }

		checkEnabled(onSuccess) {
			onSuccess(true);
		}

		action(button) {
			parent.postMessage("cinemamode", "*");
		}
	}
});
