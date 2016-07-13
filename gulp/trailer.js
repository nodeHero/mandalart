const header = ["/*!",
	" * <%= pkg.name %> - <%= pkg.title %> v<%= pkg.version %> - <%= date.now %>",
	" *",
	" * Copyright(c) <%= date.year %>, NodeHero corp, <%= pkg.author.name %> <qriosity.bk@gmail.com>",
	" */\n"
].join("\n");

var footer = [
	"\n"
].join("\n");

module.exports = {
	header: header,
	footer: footer
};
