import { useState, useEffect } from "react";
import SlideLayout from "@/components/SlideLayout";
import SlideTitle from "@/components/SlideTitle";
import SlideTopBar from "@/components/SlideTopBar";
import BulletPoint from "@/components/BulletPoint";
import { ChevronUp, ChevronDown } from "lucide-react";

const slideIds = ["title", "outline", "problem", "solution", "system", "algorithm", "result", "conclusion", "future", "references", "github", "thankyou"];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slideIds.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const el = document.getElementById(slideIds[currentSlide]);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [currentSlide]);

  const goNext = () => setCurrentSlide((prev) => Math.min(prev + 1, slideIds.length - 1));
  const goPrev = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  return (
    <div className="w-full relative">
      {/* Slide 1 - Title */}
      <section id="title" className="min-h-screen w-full flex flex-col bg-background relative">
        <SlideTopBar />
        <div className="flex-1 flex flex-col items-center justify-start px-8 md:px-16 pt-16">
          <p className="text-2xl md:text-3xl font-bold text-foreground tracking-wide mb-6">
            CAPSTONE PROJECT
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-16">
            AI-POWERED STUDY BUDDY
          </h1>
          <div className="bg-card w-full max-w-2xl rounded-md p-8 mt-8">
            <p className="text-card-foreground font-semibold text-lg mb-4">
              Presented By:
            </p>
            <ol className="text-card-foreground text-lg space-y-2 list-decimal list-inside">
              <li>Student Name – SUVASINI</li>
              <li>College Name – CMR University</li>
              <li>Department – CSE</li>
            </ol>
          </div>
        </div>
        <div className="absolute bottom-4 right-6 text-sm tracking-wide">
          <span className="text-foreground font-semibold">edu</span>
          <span className="text-destructive font-semibold">net</span>
          <span className="text-muted-foreground text-xs ml-0.5">foundation</span>
        </div>
      </section>

      {/* Slide 2 - Outline */}
      <SlideLayout id="outline">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">OUTLINE</h2>
        <ul className="space-y-4">
          <BulletPoint><strong>Problem Statement</strong></BulletPoint>
          <BulletPoint><strong>Proposed System/Solution</strong></BulletPoint>
          <BulletPoint><strong>System Development Approach</strong></BulletPoint>
          <BulletPoint><strong>Algorithm &amp; Deployment</strong></BulletPoint>
          <BulletPoint><strong>Result</strong></BulletPoint>
          <BulletPoint><strong>Conclusion</strong></BulletPoint>
          <BulletPoint><strong>Future Scope</strong></BulletPoint>
          <BulletPoint><strong>References</strong></BulletPoint>
        </ul>
      </SlideLayout>

      {/* Slide 3 - Problem Statement */}
      <SlideLayout id="problem">
        <SlideTitle>PROBLEM STATEMENT</SlideTitle>
        <ul className="space-y-4 mt-4">
          <BulletPoint>
            Students often struggle to understand complex academic concepts while studying independently.
          </BulletPoint>
          <BulletPoint>
            Searching online frequently yields lengthy, irrelevant, or overly technical results that don't match the student's level of understanding.
          </BulletPoint>
          <BulletPoint>
            Teachers and tutors are not always available for instant doubt resolution, especially outside classroom hours.
          </BulletPoint>
          <BulletPoint>
            There is no personalized, on-demand tool that can explain topics simply, summarize notes, and generate quizzes or flashcards tailored to each student's needs.
          </BulletPoint>
          <BulletPoint>
            Existing study tools lack AI-driven adaptability, making self-study inefficient and frustrating for many learners.
          </BulletPoint>
        </ul>
      </SlideLayout>

      {/* Slide 4 - Proposed Solution */}
      <SlideLayout id="solution">
        <SlideTitle>PROPOSED SOLUTION</SlideTitle>
        <ul className="space-y-4 mt-4">
          <BulletPoint>
            Build an AI-Powered Study Buddy web application that uses large language models (LLMs) to assist students in real-time.
          </BulletPoint>
          <BulletPoint>
            The tool will explain complex topics in simple, student-friendly language with step-by-step breakdowns.
          </BulletPoint>
          <BulletPoint>
            It will summarize uploaded study notes or pasted text into concise, digestible points.
          </BulletPoint>
          <BulletPoint>
            On-demand quiz and flashcard generation from any topic or material, enabling active recall and self-assessment.
          </BulletPoint>
          <BulletPoint>
            A chat-based interface that feels natural and interactive, available 24/7 with no waiting time.
          </BulletPoint>
        </ul>
      </SlideLayout>

      {/* Slide 5 - System Approach */}
      <SlideLayout id="system">
        <SlideTitle>SYSTEM APPROACH</SlideTitle>
        <ul className="space-y-4 mt-4">
          <BulletPoint>
            <strong>Frontend:</strong> React.js with TypeScript and Tailwind CSS for a responsive, modern UI.
          </BulletPoint>
          <BulletPoint>
            <strong>Backend:</strong> Supabase Edge Functions (serverless) to handle AI API calls securely.
          </BulletPoint>
          <BulletPoint>
            <strong>AI Model:</strong> Google Gemini via Lovable AI Gateway for topic explanation, summarization, and quiz generation.
          </BulletPoint>
          <BulletPoint>
            <strong>Architecture:</strong> Client sends user queries → Edge Function processes with AI → Streams response back to the user in real-time.
          </BulletPoint>
          <BulletPoint>
            <strong>Deployment:</strong> Hosted on Lovable Cloud with automatic scaling and zero-config setup.
          </BulletPoint>
        </ul>
      </SlideLayout>

      {/* Slide 6 - Algorithm & Deployment */}
      <SlideLayout id="algorithm">
        <SlideTitle>ALGORITHM &amp; DEPLOYMENT</SlideTitle>
        <ul className="space-y-4 mt-4">
          <BulletPoint>
            <strong>Input Processing:</strong> User inputs a topic, question, or pastes study notes into the chat interface.
          </BulletPoint>
          <BulletPoint>
            <strong>Prompt Engineering:</strong> The system constructs a context-aware prompt with the appropriate mode (explain, summarize, or quiz).
          </BulletPoint>
          <BulletPoint>
            <strong>AI Inference:</strong> The prompt is sent to Gemini LLM via a secure backend edge function; response is streamed token-by-token.
          </BulletPoint>
          <BulletPoint>
            <strong>Output Rendering:</strong> Markdown-formatted responses are rendered in the chat UI with proper formatting for lists, code, and headings.
          </BulletPoint>
          <BulletPoint>
            <strong>Deployment:</strong> Deployed via Lovable Cloud; frontend auto-builds and edge functions deploy instantly.
          </BulletPoint>
        </ul>
      </SlideLayout>

      {/* Slide 7 - Result */}
      <SlideLayout id="result">
        <SlideTitle>RESULT</SlideTitle>
        <ul className="space-y-4 mt-4">
          <BulletPoint>
            Successfully built a functional AI Study Buddy that can explain topics, summarize notes, and generate quizzes on demand.
          </BulletPoint>
          <BulletPoint>
            The chat-based interface provides instant, clear, and student-friendly responses powered by Google Gemini AI.
          </BulletPoint>
          <BulletPoint>
            Students can interact naturally by typing questions or pasting study material and receiving structured, easy-to-understand answers.
          </BulletPoint>
          <BulletPoint>
            The system handles multiple modes seamlessly — explanation, summarization, and quiz generation — all within one interface.
          </BulletPoint>
          <BulletPoint>
            Real-time streaming ensures fast response delivery without long wait times.
          </BulletPoint>
        </ul>
      </SlideLayout>

      {/* Slide 8 - Conclusion */}
      <SlideLayout id="conclusion">
        <SlideTitle>CONCLUSION</SlideTitle>
        <ul className="space-y-4 mt-4">
          <BulletPoint>
            The AI-Powered Study Buddy effectively addresses the gap between students' learning needs and the availability of instant, personalized academic help.
          </BulletPoint>
          <BulletPoint>
            By leveraging modern AI capabilities, the tool makes self-study more efficient, interactive, and accessible for students across all levels.
          </BulletPoint>
          <BulletPoint>
            The project demonstrates how AI and web technologies can be combined to create impactful educational tools with minimal infrastructure overhead.
          </BulletPoint>
          <BulletPoint>
            It serves as a practical capstone project showcasing full-stack development, AI integration, and user-centric design principles.
          </BulletPoint>
        </ul>
      </SlideLayout>

      {/* Slide 9 - Future Scope */}
      <SlideLayout id="future">
        <SlideTitle>FUTURE SCOPE</SlideTitle>
        <ul className="space-y-4 mt-4">
          <BulletPoint>
            Add voice-based interaction so students can ask questions verbally and receive spoken answers.
          </BulletPoint>
          <BulletPoint>
            Integrate PDF/document upload for automatic summarization and quiz generation from study materials.
          </BulletPoint>
          <BulletPoint>
            Implement user authentication to save chat history, track progress, and personalize learning paths.
          </BulletPoint>
          <BulletPoint>
            Add multi-language support to help students study in their preferred language.
          </BulletPoint>
          <BulletPoint>
            Build a spaced repetition system using generated flashcards to optimize long-term retention.
          </BulletPoint>
        </ul>
      </SlideLayout>

      {/* Slide 10 - References */}
      <SlideLayout id="references">
        <SlideTitle>REFERENCES</SlideTitle>
        <ul className="space-y-4 mt-4">
          <BulletPoint>
            Google Gemini AI – <a href="https://ai.google.dev" className="text-primary underline" target="_blank" rel="noopener noreferrer">ai.google.dev</a>
          </BulletPoint>
          <BulletPoint>
            React.js – <a href="https://react.dev" className="text-primary underline" target="_blank" rel="noopener noreferrer">react.dev</a>
          </BulletPoint>
          <BulletPoint>
            Tailwind CSS – <a href="https://tailwindcss.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">tailwindcss.com</a>
          </BulletPoint>
          <BulletPoint>
            Supabase – <a href="https://supabase.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">supabase.com</a>
          </BulletPoint>
        </ul>
      </SlideLayout>

      {/* Slide 11 - GitHub Link */}
      <SlideLayout id="github">
        <SlideTitle>GITHUB LINK</SlideTitle>
        <div className="mt-8 space-y-6">
          <p className="text-lg text-foreground">
            <strong>Github Link:</strong>{" "}
            <span className="text-muted-foreground italic">Your GitHub repository URL here</span>
          </p>
          <p className="text-lg text-foreground">
            <strong>Deployment Link:</strong>{" "}
            <span className="text-muted-foreground italic">Your deployment URL here</span>
          </p>
        </div>
      </SlideLayout>

      {/* Slide 12 - Thank You */}
      <section id="thankyou" className="min-h-screen w-full flex flex-col bg-background relative">
        <SlideTopBar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6">THANK YOU</h2>
          <p className="text-xl text-muted-foreground">For Your Attention</p>
        </div>
        <div className="absolute bottom-4 right-6 text-sm tracking-wide">
          <span className="text-foreground font-semibold">edu</span>
          <span className="text-destructive font-semibold">net</span>
          <span className="text-muted-foreground text-xs ml-0.5">foundation</span>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-2 z-50">
        <button
          onClick={goPrev}
          disabled={currentSlide === 0}
          className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg disabled:opacity-30 hover:bg-primary/90 transition-colors"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
        <button
          onClick={goNext}
          disabled={currentSlide === slideIds.length - 1}
          className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg disabled:opacity-30 hover:bg-primary/90 transition-colors"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Index;
