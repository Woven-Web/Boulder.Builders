import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, MessageCircle, ThumbsUp, Calendar } from "lucide-react";

// Mock data for a discussion post
const discussionData = {
  id: 1,
  title: "Bike Lane Safety Improvements",
  description: "Discussing how we can make bike lanes safer throughout Boulder, especially on major thoroughfares. I've noticed several near misses at intersections where bike lanes cross vehicle turning lanes, and I believe we need better visibility and marking systems. Additionally, many bike lanes suddenly end without warning, forcing cyclists into traffic unexpectedly. Has anyone else experienced these issues or have ideas for improvements?",
  author: {
    username: "cyclingadvocate",
    avatar: "https://randomuser.me/api/portraits/women/41.jpg"
  },
  comments: [
    {
      id: 1,
      text: "I completely agree. The intersection at Folsom and Canyon is particularly dangerous. I think we need separated bike lanes with their own signal timing.",
      author: {
        username: "bikecommuter",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      postedAt: "2025-04-30T17:30:00",
      votes: 8
    },
    {
      id: 2,
      text: "The Netherlands has some great examples of protected intersections we could implement here. I've put together some research on this that I'd be happy to share.",
      author: {
        username: "urbanplanner",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
      },
      postedAt: "2025-04-30T18:15:00",
      votes: 12
    },
    {
      id: 3,
      text: "As someone who drives and bikes, I think we need better education for both cyclists and drivers about how to safely navigate shared spaces.",
      author: {
        username: "multimodal",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      postedAt: "2025-05-01T09:20:00",
      votes: 5
    }
  ],
  postedAt: "2025-04-30T16:45:00",
  votes: 18,
  relatedEvents: [
    {
      id: 1,
      name: "Bike Safety Workshop",
      date: "2025-05-15T14:00:00",
      location: "Boulder Public Library"
    }
  ]
};

const ProblemDiscoveryDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [newComment, setNewComment] = useState("");
  const [commentsData, setCommentsData] = useState(discussionData.comments);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Format date for relative time display
  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
      if (diffInHours === 0) {
        const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
        return `${diffInMinutes} minutes ago`;
      }
      return `${diffInHours} hours ago`;
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else {
      return formatDate(dateString);
    }
  };

  const handleSubmitComment = () => {
    if (!newComment.trim()) {
      toast({
        title: "Empty comment",
        description: "Please enter a comment before submitting.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send the comment to an API
    const newCommentObj = {
      id: commentsData.length + 1,
      text: newComment,
      author: {
        username: "currentuser",
        avatar: "https://github.com/github.png"
      },
      postedAt: new Date().toISOString(),
      votes: 0
    };

    setCommentsData([...commentsData, newCommentObj]);
    setNewComment("");
    
    toast({
      title: "Comment added",
      description: "Your comment has been added to the discussion."
    });
  };

  const handleVoteComment = (commentId: number) => {
    setCommentsData(commentsData.map(comment => 
      comment.id === commentId 
        ? { ...comment, votes: comment.votes + 1 } 
        : comment
    ));
  };

  const handleVoteDiscussion = () => {
    // In a real app, this would send a vote to an API
    toast({
      title: "Vote recorded",
      description: "Your vote has been added to this discussion."
    });
  };

  const handlePromoteToApproved = () => {
    // In a real app, this would send a request to the API
    toast({
      title: "Problem approved",
      description: "This problem has been promoted to an approved problem.",
      variant: "default"
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/problems" className="flex items-center text-boulder-teal-600 hover:text-boulder-teal-700">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Problems</span>
          </Link>
        </div>
        
        {/* Discussion Post */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <CardTitle className="text-2xl mb-2">{discussionData.title}</CardTitle>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <img 
                        src={discussionData.author.avatar} 
                        alt={discussionData.author.username} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium">{discussionData.author.username}</span>
                  </div>
                  <span className="text-sm text-boulder-stone-500">
                    Posted on {formatDate(discussionData.postedAt)}
                  </span>
                </div>
              </div>
              <Badge variant="outline" className="bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200 self-start">
                Potential Problem
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-boulder-stone-700 whitespace-pre-line text-base">
              {discussionData.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="border-t pt-4 flex flex-wrap gap-4 justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
                onClick={handleVoteDiscussion}
              >
                <ThumbsUp className="h-4 w-4" />
                <span>Upvote ({discussionData.votes})</span>
              </Button>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4 text-boulder-stone-500" />
                <span className="text-sm text-boulder-stone-500">{commentsData.length} comments</span>
              </div>
            </div>
            <Button 
              className="bg-boulder-green-500 hover:bg-boulder-green-600"
              onClick={handlePromoteToApproved}
            >
              Promote to Approved Problem
            </Button>
          </CardFooter>
        </Card>
        
        {/* Related Events */}
        {discussionData.relatedEvents.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Related Events</h3>
            <div className="space-y-4">
              {discussionData.relatedEvents.map(event => (
                <Card key={event.id} className="bg-boulder-sand-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-boulder-sand-200 rounded-full p-2">
                        <Calendar className="h-5 w-5 text-boulder-sand-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">{event.name}</h4>
                        <p className="text-sm text-boulder-stone-600 mb-1">
                          {formatDate(event.date)}
                        </p>
                        <p className="text-sm text-boulder-stone-600">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* Comments Section */}
        <div>
          <h2 className="text-xl font-heading font-bold mb-6">Discussion ({commentsData.length})</h2>
          
          {/* New Comment Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Add Your Input</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Share your thoughts, ideas, or personal experience related to this problem..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[100px]"
              />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button 
                className="bg-boulder-teal-500 hover:bg-boulder-teal-600"
                onClick={handleSubmitComment}
              >
                Post Comment
              </Button>
            </CardFooter>
          </Card>
          
          {/* Comments List */}
          <div className="space-y-6">
            {commentsData.map(comment => (
              <Card key={comment.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full overflow-hidden">
                        <img 
                          src={comment.author.avatar} 
                          alt={comment.author.username} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{comment.author.username}</p>
                        <p className="text-xs text-boulder-stone-500">{formatRelativeTime(comment.postedAt)}</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center gap-1 h-8"
                      onClick={() => handleVoteComment(comment.id)}
                    >
                      <ThumbsUp className="h-3 w-3" />
                      <span className="text-xs">{comment.votes}</span>
                    </Button>
                  </div>
                  <p className="text-boulder-stone-700">{comment.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProblemDiscoveryDetail;
