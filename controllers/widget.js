var colors = [];
colors['black'] = "#000000";
colors['gray'] = "#d1d2d4";
colors['white'] = "#FFFFFF";
colors['pink'] = "#ef4d74";
colors['red'] = "#ed1c24";
colors['orange'] = "#f26522";
colors['yellow'] = "#fff200";
colors['green'] = "#8cc63f";
colors['darkgreen'] = "#28903b";
colors['navy'] = "#002156";
colors['blue'] = "#0072bc";
colors['purple'] = "#92278f";


$.black.image=WPATH("/images/black.png");
$.gray.image=WPATH("/images/gray.png");
$.white.image=WPATH("/images/white.png");
$.pink.image=WPATH("/images/pink.png");
$.red.image=WPATH("/images/red.png");
$.orange.image=WPATH("/images/orange.png");
$.yellow.image=WPATH("/images/yellow.png");
$.green.image=WPATH("/images/green.png");
$.darkgreen.image=WPATH("/images/dark_green.png");
$.navy.image=WPATH("/images/navy.png");
$.blue.image=WPATH("/images/blue.png");
$.purple.image=WPATH("/images/purple.png");

var myParent = arguments[0].customParent;

function pickColor(e) {
	Titanium.UI.fireEvent("app:colorpallete_clicked",{
		data: { colorname: e.source.name, color: colors[e.source.name], parent: myParent }
	});
}