
// ============================================================================
//                     			Comments Schema        
// ============================================================================

const mongoose	= require('mongoose');
const Schema	= mongoose.Schema;

const CommentSchema = new Schema({
				content: String
})

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;