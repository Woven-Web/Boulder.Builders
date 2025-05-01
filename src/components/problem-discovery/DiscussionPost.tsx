
import { Link } from "react-router-dom";
import { MessageCircle, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Author {
  username: string;
  avatar: string;
}

interface DiscussionPostProps {
  id: number;
  title: string;
  description: string;
  author: Author;
  comments: number;
  postedAt: string;
  votes: number;
  onVote?: () => void;
}

const DiscussionPost = ({
  id,
  title,
  description,
  author,
  comments,
  postedAt,
  votes,
  onVote,
}: DiscussionPostProps) => {
  
  // Format date for relative time display
  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return "Today";
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else if (diffInDays < 30) {
      return `${Math.floor(diffInDays / 7)} weeks ago`;
    } else {
      return date.toLocaleDateString("en-US", { month: 'short', day: 'numeric' });
    }
  };

  return (
    <Card className="boulder-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="outline" className="bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200">
            Potential
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-boulder-stone-600 mb-4">
          {description}
        </CardDescription>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <img 
                src={author.avatar} 
                alt={author.username} 
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-medium">{author.username}</span>
          </div>
          <span className="text-sm text-boulder-stone-500">
            Posted {formatRelativeTime(postedAt)}
          </span>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4 text-boulder-stone-500" />
            <span className="text-sm text-boulder-stone-500">{comments} comments</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 text-sm text-boulder-stone-500 hover:text-boulder-teal-600"
            onClick={onVote}
          >
            <ThumbsUp className="h-4 w-4" />
            <span>{votes} votes</span>
          </Button>
        </div>
        <Link 
          to={`/problems/discovery/${id}`} 
          className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium"
        >
          Join discussion →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DiscussionPost;
