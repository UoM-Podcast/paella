paella.addPlugin(function() {
	return class CinemaModePlugin extends paella.ButtonPlugin {
		constructor() {
			super();
			this.cinemaIconClass = 'icon-display';
			this.cinemaSubclass = 'cinemaButton';
		}

		getAlignment() { return 'right'; }
		getSubclass() { return this.cinemaSubclass; }
		getIconClass() { return this.cinemaIconClass; }
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
