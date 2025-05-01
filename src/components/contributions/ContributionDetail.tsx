
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, ThumbsUp } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
}

interface Contribution {
  id: number;
  type: string;
  title: string;
  author: string;
  date: string;
  votes: number;
  description: string;
  comments: Comment[];
}

interface ContributionDetailProps {
  contribution: Contribution;
}

const ContributionDetail = ({ contribution }: ContributionDetailProps) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the comment to a database
    alert(`Comment added: ${newComment}`);
    setNewComment("");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <Badge variant="outline" className="mb-2">{contribution.type}</Badge>
              <CardTitle>{contribution.title}</CardTitle>
              <CardDescription>
                By {contribution.author} • {new Date(contribution.date).toLocaleDateString()}
              </CardDescription>
            </div>
            <Button variant="outline" className="flex items-center gap-1">
              <ArrowUp className="w-4 h-4" />
              {contribution.votes}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-boulder-stone-700">{contribution.description}</p>
            
            {/* Here we could add more structured content based on the contribution type */}
            {contribution.type === "Research" && (
              <div className="mt-4 p-4 bg-boulder-teal-50 rounded-md">
                <h3 className="text-lg font-medium">Research Summary</h3>
                <p>This section would contain detailed research findings, methodologies, and data visualizations.</p>
              </div>
            )}
            
            {contribution.type === "Idea" && (
              <div className="mt-4 p-4 bg-boulder-sky-50 rounded-md">
                <h3 className="text-lg font-medium">Idea Details</h3>
                <p>This section would contain more detailed explanation of the proposed idea, including implementation considerations, resources needed, and potential impact.</p>
              </div>
            )}
            
            {contribution.type === "Resource" && (
              <div className="mt-4 p-4 bg-boulder-sand-50 rounded-md">
                <h3 className="text-lg font-medium">Resource Details</h3>
                <p>This section would contain links, files, or other resources that have been shared, along with descriptions and usage instructions.</p>
              </div>
            )}
            
            {contribution.type === "Question" && (
              <div className="mt-4 p-4 bg-boulder-stone-50 rounded-md">
                <h3 className="text-lg font-medium">Question Details</h3>
                <p>This section would contain more context around the question being asked, including why it's important and what kind of answers would be most helpful.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Discussion</h3>
        
        {contribution.comments.length > 0 ? (
          <div className="space-y-4 mb-6">
            {contribution.comments.map(comment => (
              <Card key={comment.id}>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-boulder-teal-100 flex items-center justify-center">
                        {comment.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{comment.author}</div>
                        <div className="text-xs text-boulder-stone-500">{new Date(comment.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-boulder-stone-500">
                      <ThumbsUp className="w-3 h-3" />
                      {comment.likes}
                    </Button>
                  </div>
                  <p className="text-boulder-stone-700 mt-2">{comment.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-boulder-stone-500 mb-4">No comments yet. Be the first to join the discussion!</p>
        )}
        
        <form onSubmit={handleAddComment}>
          <Textarea
            placeholder="Add your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-2"
            required
          />
          <div className="flex justify-end">
            <Button type="submit" className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
              Post Comment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContributionDetail;
