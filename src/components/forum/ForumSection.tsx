
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface ForumThread {
  id: number;
  title: string;
  author: string;
  date: string;
  replies: number;
  lastActivity: string;
}

interface ForumSectionProps {
  threads: ForumThread[];
}

const ForumSection = ({ threads }: ForumSectionProps) => {
  const [activeThread, setActiveThread] = useState<number | null>(null);
  const [showNewThreadForm, setShowNewThreadForm] = useState(false);
  const [newThreadTitle, setNewThreadTitle] = useState("");
  const [newThreadContent, setNewThreadContent] = useState("");
  
  const handleNewThreadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the new thread to a database
    alert(`New thread created: ${newThreadTitle}`);
    setNewThreadTitle("");
    setNewThreadContent("");
    setShowNewThreadForm(false);
  };

  const activeThreadData = threads.find(t => t.id === activeThread);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Discussion Forum</h2>
        <Button 
          onClick={() => setShowNewThreadForm(!showNewThreadForm)}
          className="bg-boulder-teal-500 hover:bg-boulder-teal-600"
        >
          <Plus className="w-4 h-4 mr-2" /> New Discussion
        </Button>
      </div>

      {showNewThreadForm && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <form onSubmit={handleNewThreadSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="thread-title" className="block text-sm font-medium mb-1">
                    Discussion Title
                  </label>
                  <input
                    id="thread-title"
                    className="w-full p-2 border rounded-md"
                    value={newThreadTitle}
                    onChange={(e) => setNewThreadTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="thread-content" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="thread-content"
                    className="w-full p-2 border rounded-md"
                    rows={4}
                    value={newThreadContent}
                    onChange={(e) => setNewThreadContent(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowNewThreadForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-boulder-teal-500 hover:bg-boulder-teal-600"
                  >
                    Post Discussion
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {activeThread !== null && activeThreadData ? (
        <div className="mb-6">
          <Button 
            variant="outline" 
            className="mb-4"
            onClick={() => setActiveThread(null)}
          >
            ← Back to all discussions
          </Button>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-2">{activeThreadData.title}</h3>
              <div className="text-sm text-boulder-stone-500 mb-4">
                Started by {activeThreadData.author} on {new Date(activeThreadData.date).toLocaleDateString()}
              </div>
              
              {/* Mock conversation content - in a real app this would load from API */}
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-boulder-teal-100 flex items-center justify-center">
                      {activeThreadData.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{activeThreadData.author}</div>
                      <div className="text-xs text-boulder-stone-500">{new Date(activeThreadData.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <p className="text-boulder-stone-700">
                    This is an important issue that affects many residents in our community. I'd like to hear what others think about potential solutions.
                  </p>
                </div>

                {/* Mock replies */}
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-boulder-sky-100 flex items-center justify-center">
                      R
                    </div>
                    <div>
                      <div className="font-medium">Robin Taylor</div>
                      <div className="text-xs text-boulder-stone-500">{new Date(activeThreadData.lastActivity).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <p className="text-boulder-stone-700">
                    I think we need to consider the geographic distribution of services first. Many neighborhoods are completely isolated without personal vehicles.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-boulder-sand-100 flex items-center justify-center">
                      J
                    </div>
                    <div>
                      <div className="font-medium">Jordan Smith</div>
                      <div className="text-xs text-boulder-stone-500">{new Date(activeThreadData.lastActivity).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <p className="text-boulder-stone-700">
                    Has anyone looked at the models used in other university towns like Madison or Ann Arbor? They seem to have better integration between city and campus transit.
                  </p>
                </div>
              </div>

              {/* Reply form */}
              <div className="mt-6">
                <Textarea
                  placeholder="Write your reply..."
                  className="w-full mb-2"
                />
                <div className="flex justify-end">
                  <Button className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
                    Post Reply
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="space-y-4">
          {threads.map((thread) => (
            <Card key={thread.id} className="hover:shadow-md transition-shadow border border-gray-200">
              <CardContent className="p-4 cursor-pointer" onClick={() => setActiveThread(thread.id)}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg text-boulder-teal-900">{thread.title}</h3>
                    <p className="text-sm text-boulder-stone-500">
                      Started by {thread.author} • {new Date(thread.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center text-boulder-stone-500 text-sm">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {thread.replies} replies
                  </div>
                </div>
                <div className="text-xs text-boulder-stone-500 mt-2">
                  Last activity: {new Date(thread.lastActivity).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForumSection;
