import React, { useState, useRef, useEffect } from 'react';

/* ─────────────────────────────────────────────
   Icon Components (inline SVGs – no extra deps)
───────────────────────────────────────────── */
const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);

const AttachIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.44 11.05L12.25 20.24a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66L9.42 17.41a2 2 0 01-2.83-2.83l8.49-8.48" />
    </svg>
);

const MicIcon = ({ active }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill={active ? 'currentColor' : 'none'} />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
);

const EmojiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
);

const ClearIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

/* ─────────────────────────────────────────────
   Toolbar Button
───────────────────────────────────────────── */
const ToolbarBtn = ({ onClick, title, active = false, danger = false, children }) => (
    <button
        type="button"
        onClick={onClick}
        title={title}
        aria-label={title}
        className={`
            relative p-2 rounded-lg transition-all duration-200 focus:outline-none
            focus:ring-2 focus:ring-offset-0 transform active:scale-90
            ${active
                ? 'text-indigo-600 bg-indigo-50 ring-2 ring-indigo-200'
                : danger
                    ? 'text-slate-400 hover:text-rose-500 hover:bg-rose-50 focus:ring-rose-200'
                    : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-200'
            }
        `}
    >
        {children}
    </button>
);

/* ─────────────────────────────────────────────
   Character Counter Ring
───────────────────────────────────────────── */
const CharRing = ({ count, max }) => {
    const pct = Math.min(count / max, 1);
    const r = 10;
    const circ = 2 * Math.PI * r;
    const dash = circ * (1 - pct);
    const danger = pct >= 0.9;
    const warn = pct >= 0.7;

    return (
        <div className="relative flex items-center justify-center w-8 h-8" title={`${count}/${max} characters`}>
            <svg className="w-8 h-8 -rotate-90" viewBox="0 0 24 24">
                {/* Track */}
                <circle cx="12" cy="12" r={r} fill="none" stroke="currentColor"
                    strokeWidth="2" className="text-slate-200" />
                {/* Progress */}
                <circle cx="12" cy="12" r={r} fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray={circ}
                    strokeDashoffset={dash}
                    strokeLinecap="round"
                    className={`transition-all duration-300 ${danger ? 'text-rose-500' : warn ? 'text-amber-400' : 'text-indigo-500'}`}
                />
            </svg>
            {pct >= 0.7 && (
                <span className={`absolute text-[8px] font-bold ${danger ? 'text-rose-500' : 'text-amber-500'}`}>
                    {max - count}
                </span>
            )}
        </div>
    );
};

/* ─────────────────────────────────────────────
   Suggestion Chips
───────────────────────────────────────────── */
const SUGGESTIONS = [
    'How do I test my chatbot?',
    'Summarise latest results',
    'Show performance metrics',
    'Run a test scenario',
];

/* ─────────────────────────────────────────────
   Main ChatInput Component
───────────────────────────────────────────── */
const ChatInput = ({
    onSend,
    placeholder = 'Ask anything about your AI chatbot…',
    disabled = false,
    maxLength = 2000,
}) => {
    const [message, setMessage] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const textareaRef = useRef(null);

    /* Auto-resize textarea */
    useEffect(() => {
        const el = textareaRef.current;
        if (!el) return;
        el.style.height = 'auto';
        el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
    }, [message]);

    /* Focus textarea on mount */
    useEffect(() => {
        textareaRef.current?.focus();
    }, []);

    const canSend = message.trim().length > 0 && !disabled && message.length <= maxLength;

    const handleSend = () => {
        if (!canSend) return;
        onSend?.(message.trim());
        setMessage('');
        setShowSuggestions(true);
        textareaRef.current?.focus();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleChange = (e) => {
        const val = e.target.value;
        if (val.length > maxLength) return;
        setMessage(val);
        if (val.length > 0) setShowSuggestions(false);
        else setShowSuggestions(true);
    };

    const handleSuggestion = (text) => {
        setMessage(text);
        setShowSuggestions(false);
        textareaRef.current?.focus();
    };

    const toggleRecording = () => setIsRecording((prev) => !prev);

    const clearMessage = () => {
        setMessage('');
        setShowSuggestions(true);
        textareaRef.current?.focus();
    };

    return (
        <div className="w-full px-4 py-4 bg-slate-50/80 backdrop-blur-xl border-t border-slate-200/80">

            {/* ── Suggestion chips ── */}
            <div
                className={`
                    flex flex-wrap gap-2 mb-3 overflow-hidden transition-all duration-300 ease-in-out
                    ${showSuggestions ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                {SUGGESTIONS.map((s) => (
                    <button
                        key={s}
                        type="button"
                        onClick={() => handleSuggestion(s)}
                        className="
                            inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                            bg-white border border-slate-200 text-slate-600
                            hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-50
                            transition-all duration-200 shadow-sm hover:shadow-indigo-100 hover:shadow-md
                            active:scale-95
                        "
                    >
                        {s}
                    </button>
                ))}
            </div>

            {/* ── Main input card ── */}
            <div
                className={`
                    relative flex flex-col rounded-2xl bg-white
                    border transition-all duration-300 shadow-sm
                    ${isFocused
                        ? 'border-indigo-400 shadow-indigo-100 shadow-lg ring-4 ring-indigo-50'
                        : 'border-slate-200 hover:border-slate-300 shadow-slate-100'
                    }
                `}
            >
                {/* Recording indicator banner */}
                {isRecording && (
                    <div className="flex items-center gap-2 px-4 pt-3 pb-1 border-b border-slate-100">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
                        </span>
                        <span className="text-xs font-semibold text-rose-500 tracking-wide">
                            Recording in progress… speak clearly
                        </span>
                    </div>
                )}

                {/* Textarea */}
                <div className="relative px-4 pt-3">
                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder={placeholder}
                        disabled={disabled}
                        rows={1}
                        className="
                            w-full resize-none bg-transparent text-sm text-slate-800
                            placeholder:text-slate-400 leading-relaxed
                            focus:outline-none disabled:cursor-not-allowed disabled:opacity-50
                            transition-all duration-200
                            pr-8
                        "
                        style={{ minHeight: '44px', maxHeight: '200px' }}
                        aria-label="Chat message input"
                    />

                    {/* Clear button — shown only when there's text */}
                    {message.length > 0 && (
                        <button
                            type="button"
                            onClick={clearMessage}
                            aria-label="Clear message"
                            className="
                                absolute top-3 right-1 p-1 rounded-full text-slate-300
                                hover:text-slate-500 hover:bg-slate-100 transition-all duration-150
                            "
                        >
                            <ClearIcon />
                        </button>
                    )}
                </div>

                {/* ── Bottom toolbar ── */}
                <div className="flex items-center justify-between px-3 py-2 mt-1">

                    {/* Left actions */}
                    <div className="flex items-center gap-1">
                        <ToolbarBtn title="Attach file">
                            <AttachIcon />
                        </ToolbarBtn>

                        <ToolbarBtn title="Insert emoji">
                            <EmojiIcon />
                        </ToolbarBtn>

                        <ToolbarBtn
                            title={isRecording ? 'Stop recording' : 'Voice input'}
                            onClick={toggleRecording}
                            active={isRecording}
                            danger={isRecording}
                        >
                            <MicIcon active={isRecording} />
                        </ToolbarBtn>

                        {/* Divider */}
                        <div className="w-px h-5 bg-slate-200 mx-1" />

                        {/* Shift + Enter hint */}
                        <span className="hidden sm:inline text-[11px] text-slate-400 select-none">
                            <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-500">Shift</kbd>
                            {' + '}
                            <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-500">↵</kbd>
                            {' for new line'}
                        </span>
                    </div>

                    {/* Right: char ring + send */}
                    <div className="flex items-center gap-2">
                        {message.length > maxLength * 0.5 && (
                            <CharRing count={message.length} max={maxLength} />
                        )}

                        <button
                            type="button"
                            onClick={handleSend}
                            disabled={!canSend}
                            aria-label="Send message"
                            title="Send (Enter)"
                            className={`
                                flex items-center justify-center w-10 h-10 rounded-xl font-medium
                                transition-all duration-200 transform focus:outline-none focus:ring-2
                                focus:ring-indigo-300 focus:ring-offset-1
                                ${canSend
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 hover:shadow-indigo-300 hover:scale-105 active:scale-95'
                                    : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                }
                            `}
                        >
                            <SendIcon />
                        </button>
                    </div>
                </div>
            </div>

            {/* Typing shortcut note */}
            <p className="mt-2 text-center text-[11px] text-slate-400 select-none">
                AI Test Center may produce inaccurate information. Always verify responses.
            </p>
        </div>
    );
};

export default ChatInput;
