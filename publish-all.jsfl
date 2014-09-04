var docs = fl.documents;
var doc;

for (var i = 0; i < docs.length; i++) {
	doc = docs[i];

	var pubPath = doc.name.replace('.fla', '');
	pubPath = pubPath.toLowerCase();
	pubPath = pubPath.replace(/^([a-z0-9]+)\-[a-z0-9]+\-([0-9])?([0-9])?\-?/gi, '../bin/$1-');

	var profileXml = new XML(doc.exportPublishProfileString('Default'));
	profileXml..defaultNames[0] = 0;
	profileXml..flashDefaultName[0] = 0;
	profileXml..htmlDefaultName[0] = 0;
	profileXml..flashFileName[0] = pubPath + '.swf';
	profileXml..htmlFileName[0] = pubPath + '.html';

	fl.trace('Publishing to ' + pubPath);
	doc.importPublishProfileString(profileXml.toString());

	doc.publish();
	doc.save();
};