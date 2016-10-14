/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg",
	"backgrounds/images/6.jpg",
	"backgrounds/images/7.jpg",
	"backgrounds/images/8.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
    {youtube: "XqgmayuleBs", name: "케이윌(K.Will) & 매드 클라운(Mad Clown) - 그게 뭐라고"},
	{youtube: "MDu3xf884FQ", name: "우주를 줄게 - 볼빨간사춘기"},
	{youtube: "Q9sHLfhPMfw", name: "X Song - 볼빨간사춘기"},
	{youtube: "MtWQhmF3-NM", name: "임창정 - 내가 저지른 사랑"},
	{youtube: "Uhtp99HOuDE", name: "한동근 - 이 소설의 끝을 다시 써보려 해 "},
	{youtube: "XZqoLX8Gq78", name: "구르미 그린 달빛(구르미 그린 달빛 OST) - 거미"},
	{youtube: "VvU2WqhG25o", name: "마음을 삼킨다 (구르미 그린 달빛 OST) - 산들"},
	{youtube: "GPijmcjTfHM", name: "My All (끝에서 두 번째 사랑 OST) - 벤"},
	{youtube: "aZbH_ZEe4x0", name: "나만 안되는 연애 - 볼빨간사춘기"},
	{youtube: "ndR6hTZO47s", name: "녹는다 (구르미 그린 달빛 OST) - 케이윌"},
	{youtube: "8bmL9VCgkqQ", name: "다정하게, 안녕히 (구르미 그린 달빛 OST) - 성시경"},
	{youtube: "0Jd52OuVHdg", name: "잠은 다 잤나봐요 (구르미 그린 달빛 OST) - 소유, 유승우"},
	{youtube: "TEQ5Eb0CeMQ", name: "깍지 (구르미 그린 달빛 OST) - 이적"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 100;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"컨트롤 두번누르면 눕기를 시전할수있습니다.",
"위헙 지역은 깡패(NPC)들이 있는곳입니다",
"죽이면 돈300원을 드립니다.",
"ATM털이는 정부직인원1명일때 털이가능합니다",
"금고털이는 서버인원5명 정부직",
"논알 금지",
"프리킬 금지",
"프롭킬 금지",
"OOC,IC 남용 금지",
"비하 금지",
"패드립금지",
"욕설 가능",
"ATM털이는 광고하셔야합니다.",
"은행털이는 광고하셔야합니다.",
"암살할때는 제거당할타겟이름 말고 사유만 광고하셔야합니다.",
"클라임업은 주거침입죄로 사살가능",
"머프는 법따라 다름 기본머프만합법가능",
"논알 금지",
"프리킬 금지",
"프롭킬 금지",
"OOC,IC 남용 금지",
"비하 금지",
"패드립금지",
"욕설 가능",
"ATM털이는 광고하셔야합니다.",
"은행털이는 광고하셔야합니다.",
"암살할때는 제거당할타겟이름 말고 사유만 광고하셔야합니다.",
"클라임업은 주거침입죄로 사살가능",
"머프는 법따라 다름 기본머프만합법가능",
"motd에 없다는 식으로 말하기 금지"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
