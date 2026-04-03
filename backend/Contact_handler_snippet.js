// ─────────────────────────────────────────────────────────────
// ONLY THE SUBMIT HANDLER IS CHANGED — nothing else modified.
// Replace the existing handleSubmit (or the submit button's
// onClick) inside your Contact.js with this function.
// ─────────────────────────────────────────────────────────────

const [submitted, setSubmitted] = useState(false);
const [loading, setLoading]     = useState(false);
const [error, setError]         = useState('');

// Refs to read form values without touching any JSX
const nameRef        = useRef('');
const companyRef     = useRef('');
const emailRef       = useRef('');
const countryRef     = useRef('');
const quantityRef    = useRef('');
const materialRef    = useRef('');
const descriptionRef = useRef('');

const handleSubmit = async () => {
  setError('');

  const payload = {
    name:        nameRef.current,
    company:     companyRef.current,
    email:       emailRef.current,
    country:     countryRef.current,
    quantity:    quantityRef.current,
    material:    materialRef.current,
    description: descriptionRef.current,
  };

  if (!payload.name || !payload.email || !payload.description) {
    setError('Please fill in Name, Email, and Project Description.');
    return;
  }

  setLoading(true);
  try {
    const res  = await fetch('http://localhost:5000/send-email', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.success) {
      setSubmitted(true);
    } else {
      setError(data.message || 'Something went wrong. Please try again.');
    }
  } catch {
    setError('Could not reach the server. Please email us directly at info@microcraft.in');
  } finally {
    setLoading(false);
  }
};

// ─────────────────────────────────────────────────────────────
// HOW TO WIRE UP THE REFS — add onChange to each existing input.
// Do NOT change any className, style, label, or layout.
// Only add the onChange prop shown below to each input/select/textarea.
// ─────────────────────────────────────────────────────────────

// Full Name input  → add:  onChange={e => nameRef.current = e.target.value}
// Company input    → add:  onChange={e => companyRef.current = e.target.value}
// Email input      → add:  onChange={e => emailRef.current = e.target.value}
// Country select   → add:  onChange={e => countryRef.current = e.target.value}
// Quantity input   → add:  onChange={e => quantityRef.current = e.target.value}
// Material input   → add:  onChange={e => materialRef.current = e.target.value}
// Description area → add:  onChange={e => descriptionRef.current = e.target.value}

// Submit button    → change onClick to:  onClick={handleSubmit}
//                    Optionally show loading state:
//                    {loading ? 'Sending…' : '▶  Submit Request for Quotation'}

// Error message    → add this just above the submit button (no styling change needed):
// {error && <p style={{color:'#c0392b',fontSize:'13px',marginBottom:'8px'}}>{error}</p>}
