BoxParser.syncSampleGroupEntry.prototype.parse = function(stream, length) {
	var tmp_byte = stream.readUint8();
	this.NAL_unit_type = tmp_byte & 0x3F;
}

