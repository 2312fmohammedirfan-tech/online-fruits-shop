const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// ============================================================
// NUTRITION DATABASE
// ============================================================
const FRUIT_NUTRITION_DB = {
    'Organic Mango':      { calories:60,  protein:0.8, carbs:15, fiber:1.6, sugar:14, vitaminC:36,  vitaminA:54,  potassium:168, iron:0.2 },
    'Crispy Apple':       { calories:52,  protein:0.3, carbs:14, fiber:2.4, sugar:10, vitaminC:5,   vitaminA:3,   potassium:107, iron:0.1 },
    'Fresh Strawberries': { calories:32,  protein:0.7, carbs:8,  fiber:2.0, sugar:5,  vitaminC:59,  vitaminA:1,   potassium:153, iron:0.4 },
    'Sweet Banana':       { calories:89,  protein:1.1, carbs:23, fiber:2.6, sugar:12, vitaminC:9,   vitaminA:3,   potassium:358, iron:0.3 },
    'Blueberries':        { calories:57,  protein:0.7, carbs:14, fiber:2.4, sugar:10, vitaminC:9,   vitaminA:3,   potassium:77,  iron:0.3 },
    'Dragon Fruit':       { calories:60,  protein:1.2, carbs:13, fiber:3.0, sugar:8,  vitaminC:9,   vitaminA:1,   potassium:436, iron:1.9 },
    'Golden Pineapple':   { calories:50,  protein:0.5, carbs:13, fiber:1.4, sugar:10, vitaminC:48,  vitaminA:3,   potassium:109, iron:0.3 },
    'Red Grapes':         { calories:69,  protein:0.7, carbs:18, fiber:0.9, sugar:15, vitaminC:4,   vitaminA:3,   potassium:191, iron:0.4 },
    'Pomegranate':        { calories:83,  protein:1.7, carbs:19, fiber:4.0, sugar:14, vitaminC:10,  vitaminA:0,   potassium:236, iron:0.3 },
    'Kiwi Fruit':         { calories:61,  protein:1.1, carbs:15, fiber:3.0, sugar:9,  vitaminC:93,  vitaminA:4,   potassium:312, iron:0.3 },
    'Ripe Oranges':       { calories:47,  protein:0.9, carbs:12, fiber:2.4, sugar:9,  vitaminC:53,  vitaminA:11,  potassium:181, iron:0.1 },
    'Hass Avocados':      { calories:160, protein:2.0, carbs:9,  fiber:6.7, sugar:0.7,vitaminC:10,  vitaminA:7,   potassium:485, iron:0.6 },
    'Sweet Cherries':     { calories:63,  protein:1.1, carbs:16, fiber:2.1, sugar:13, vitaminC:7,   vitaminA:8,   potassium:222, iron:0.4 },
    'Passion Fruit':      { calories:97,  protein:2.2, carbs:23, fiber:10.4,sugar:11, vitaminC:30,  vitaminA:64,  potassium:348, iron:1.6 },
    'Fresh Watermelon':   { calories:30,  protein:0.6, carbs:8,  fiber:0.4, sugar:6,  vitaminC:8,   vitaminA:28,  potassium:112, iron:0.2 },
    'Papaya':             { calories:43,  protein:0.5, carbs:11, fiber:1.7, sugar:8,  vitaminC:62,  vitaminA:47,  potassium:182, iron:0.3 }
};

// ============================================================
// HEALTH GOAL MAPPING
// ============================================================
const HEALTH_GOALS = {
    'weight-loss':       { label:'Weight Loss',       icon:'⚖️',  color:'#10b981', fruits:['Crispy Apple','Fresh Strawberries','Kiwi Fruit','Ripe Oranges','Fresh Watermelon','Papaya'],    tip:'Low-cal, high-fibre fruits keep you full longer.' },
    'muscle-gain':       { label:'Muscle Gain',       icon:'💪',  color:'#f59e0b', fruits:['Hass Avocados','Organic Mango','Sweet Banana','Pomegranate','Dragon Fruit','Passion Fruit'],   tip:'Potassium-rich fruits aid muscle recovery & growth.' },
    'diabetes-friendly': { label:'Diabetes Friendly', icon:'🩺',  color:'#6366f1', fruits:['Crispy Apple','Blueberries','Sweet Cherries','Kiwi Fruit','Fresh Strawberries','Pomegranate'],tip:'Low-GI fruits help maintain stable blood sugar.' },
    'immunity':          { label:'Immunity Boost',    icon:'🛡️', color:'#ef4444', fruits:['Ripe Oranges','Kiwi Fruit','Fresh Strawberries','Blueberries','Pomegranate','Papaya'],         tip:'High vitamin C & antioxidants strengthen immunity.' },
    'vitamin-c':         { label:'Vitamin C Boost',   icon:'🍊',  color:'#f97316', fruits:['Ripe Oranges','Kiwi Fruit','Papaya','Fresh Strawberries','Golden Pineapple','Dragon Fruit'],  tip:'Vitamin C aids collagen synthesis & iron absorption.' },
    'digestive':         { label:'Digestive Health',  icon:'🌿',  color:'#14b8a6', fruits:['Papaya','Sweet Banana','Golden Pineapple','Crispy Apple','Kiwi Fruit','Passion Fruit'],        tip:'Fibre-rich fruits promote healthy gut bacteria.' }
};

// ============================================================
// SUBSCRIPTION PLANS
// ============================================================
const SUBSCRIPTION_PLANS = [
    { id:'daily-box',      name:'Daily Fruit Box',       price:149, interval:'Daily',   icon:'🌅', fruits:'500g mixed seasonal fruits daily',       badge:'Popular' },
    { id:'weekly-family',  name:'Weekly Family Pack',    price:799, interval:'Weekly',  icon:'👨‍👩‍👧‍👦',fruits:'3 kg curated family pack weekly',           badge:'Best Value' },
    { id:'office-basket',  name:'Office Fruit Basket',   price:599, interval:'Weekly',  icon:'🏢', fruits:'2 kg assorted fruits for your team',       badge:'' },
    { id:'monthly-living', name:'Monthly Healthy Living',price:2499,interval:'Monthly', icon:'🌱', fruits:'12 kg organic variety + nutrition guide',  badge:'Premium' }
];

// ============================================================
// CHATBOT KNOWLEDGE BASE
// ============================================================
const CHATBOT_RESPONSES = [
    { keywords:['immunity','immune','cold','flu','sick'],      response:'🛡️ For immunity, eat Oranges, Kiwi, Strawberries, Blueberries and Pomegranate. They\'re packed with Vitamin C and antioxidants!' },
    { keywords:['protein','muscle','gym','workout','gain'],    response:'💪 For muscle gain, try Avocados, Bananas, Dragon Fruit, Pomegranate and Passion Fruit. They\'re rich in potassium and proteins.' },
    { keywords:['weight','slim','diet','fat','lose'],          response:'⚖️ For weight loss, choose Apples, Strawberries, Kiwi, Oranges and Watermelon. They are low in calories but high in fibre!' },
    { keywords:['diabetes','sugar','blood','glycemic'],        response:'🩺 Diabetes-friendly fruits: Apples, Blueberries, Cherries, Kiwi and Strawberries. They have a low glycemic index.' },
    { keywords:['vitamin c','vitamin-c','citrus'],             response:'🍊 Best Vitamin C sources: Oranges, Kiwi, Papaya, Strawberries and Pineapple. Kiwi actually has more Vitamin C than oranges!' },
    { keywords:['fibre','fiber','digestion','gut','stomach'],  response:'🌿 For digestion: Papaya (contains papain enzyme), Pineapple, Banana, Apple and Kiwi are excellent choices.' },
    { keywords:['seasonal','season','now','today'],            response:'🌤️ Current seasonal picks: Watermelon, Pomegranate, Red Grapes and Oranges. Check our catalog for freshness scores!' },
    { keywords:['cheap','affordable','budget','less','price'], response:'💰 Best budget fruits: Bananas (₹60/kg), Watermelon (₹45/piece), Oranges (₹110/kg) and Mango (₹120/kg).' },
    { keywords:['expensive','premium','exotic','rare'],        response:'✨ Our premium picks: Sweet Cherries (₹600/kg), Hass Avocados (₹450/piece), Blueberries (₹400/kg) and Dragon Fruit (₹350/piece).' },
    { keywords:['fresh','freshness','ripe','quality'],         response:'🌟 All our fruits display a freshness score (0–100) on every product card. Green = very fresh, Amber = fresh, Red = use soon.' },
    { keywords:['organic','natural','pesticide','chemical'],   response:'🌱 Fruits marked with an 🌿 Organic badge are grown without synthetic pesticides. Filter by "Organic" in the catalog!' },
    { keywords:['banana','bananas'],                           response:'🍌 Bananas are rich in potassium (358mg), fibre and natural energy. Great for pre-workout fuel and post-workout recovery!' },
    { keywords:['mango','mangoes'],                            response:'🥭 Mangoes contain Vitamin A, C and folate. They\'re anti-inflammatory and support eye health. Season: Mar–Jun.' },
    { keywords:['avocado','avocados'],                         response:'🥑 Avocados are loaded with healthy fats, Vitamin K and potassium (485mg). Excellent for heart health and brain function.' },
    { keywords:['hello','hi','hey','help','start'],            response:'👋 Hi! I\'m FruitBot 🍓 I can answer questions about nutrition, health goals, fruit benefits and seasonal picks. What would you like to know?' },
    { keywords:['subscribe','subscription','plan','delivery'], response:'📦 We offer 4 subscription plans — Daily Box, Weekly Family Pack, Office Basket and Monthly Healthy Living. Click "Subscriptions" in the nav!' },
    { keywords:['order','track','delivery','arrive','when'],   response:'🚚 After placing an order, a live delivery tracker appears showing real-time status from "Preparing" → "On the Way" → "Delivered"!' },
    { keywords:['point','points','loyalty','reward','silver','gold','platinum'], response:'⭐ Earn 1 loyalty point for every ₹10 spent! Reach Silver (100pts), Gold (500pts) or Platinum (1000pts) for exclusive benefits.' },
    { keywords:['recipe','cook','juice','eat','prepare'],      response:'🍹 Try a morning immunity shot: blend Oranges + Kiwi + Ginger. Or a smoothie bowl: Banana + Strawberries + Blueberries + granola!' }
];

// ============================================================
// FruitDB — IndexedDB Wrapper
// ============================================================
class FruitDB {
    constructor() {
        this.dbName = 'FreshFruitDB';
        this.version = 2;
        this.db = null;
    }

    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('users'))
                    db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
                if (!db.objectStoreNames.contains('products')) {
                    const ps = db.createObjectStore('products', { keyPath: 'id', autoIncrement: true });
                    ps.createIndex('category', 'category', { unique: false });
                }
                if (!db.objectStoreNames.contains('orders')) {
                    const os = db.createObjectStore('orders', { keyPath: 'id', autoIncrement: true });
                    os.createIndex('userId', 'userId', { unique: false });
                }
                if (!db.objectStoreNames.contains('subscriptions')) {
                    const ss = db.createObjectStore('subscriptions', { keyPath: 'id', autoIncrement: true });
                    ss.createIndex('userId', 'userId', { unique: false });
                }
            };

            request.onsuccess = (e) => { this.db = e.target.result; resolve(this.db); };
            request.onerror  = (e) => reject('DB error: ' + e.target.errorCode);
        });
    }

    async add(store, data)         { return this._tx(store,'readwrite', s => s.add(data)); }
    async getAll(store)            { return this._tx(store,'readonly',   s => s.getAll()); }
    async getById(store, id)       { return this._tx(store,'readonly',   s => s.get(id)); }
    async update(store, data)      { return this._tx(store,'readwrite', s => s.put(data)); }
    async delete(store, id)        { return this._tx(store,'readwrite', s => s.delete(id)); }

    _tx(store, mode, fn) {
        return new Promise((resolve, reject) => {
            const tx  = this.db.transaction([store], mode);
            const req = fn(tx.objectStore(store));
            req.onsuccess = () => resolve(req.result);
            req.onerror   = () => reject(req.error);
        });
    }
}

// ============================================================
// RECOMMENDATION ENGINE
// ============================================================
class FruitRecommendationEngine {
    constructor(db) { this.db = db; }

    async getRecommendations(goalKey) {
        const goal = HEALTH_GOALS[goalKey];
        if (!goal) return [];
        const allProducts = await this.db.getAll('products');
        return goal.fruits
            .map(name => allProducts.find(p => p.name === name))
            .filter(Boolean);
    }

    async getDailyPick() {
        const allProducts = await this.db.getAll('products');
        const available   = allProducts.filter(p => p.stock > 0);
        const idx = new Date().getDate() % available.length;
        return available[idx];
    }
}

// ============================================================
// FRUIT CHATBOT
// ============================================================
class FruitChatbot {
    constructor(app) {
        this.app = app;
        this.history = [];
    }

    respond(userMsg) {
        const lower = userMsg.toLowerCase();
        for (const entry of CHATBOT_RESPONSES) {
            if (entry.keywords.some(kw => lower.includes(kw))) {
                return entry.response;
            }
        }
        return '🤔 I\'m not sure about that. Try asking about nutrition, immunity, weight loss, diabetes, seasonal fruits or subscriptions!';
    }

    addMessage(role, text) {
        this.history.push({ role, text, time: new Date() });
        this.renderChat();
    }

    renderChat() {
        const container = document.getElementById('chatbot-messages');
        if (!container) return;
        container.innerHTML = this.history.map(m => `
            <div class="chat-msg ${m.role}">
                <div class="chat-bubble">${m.text}</div>
                <div class="chat-time">${m.time.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</div>
            </div>
        `).join('');
        container.scrollTop = container.scrollHeight;
    }

    handleInput() {
        const input = document.getElementById('chatbot-input');
        if (!input) return;
        const msg = input.value.trim();
        if (!msg) return;
        this.addMessage('user', msg);
        input.value = '';
        // Show typing indicator
        const container = document.getElementById('chatbot-messages');
        if (container) {
            const typing = document.createElement('div');
            typing.className = 'chat-msg bot typing-indicator';
            typing.id = 'typing-dots';
            typing.innerHTML = '<div class="chat-bubble"><span></span><span></span><span></span></div>';
            container.appendChild(typing);
            container.scrollTop = container.scrollHeight;
        }
        setTimeout(() => {
            document.getElementById('typing-dots')?.remove();
            this.addMessage('bot', this.respond(msg));
        }, 800);
    }
}

// ============================================================
// VOICE ORDER HANDLER
// ============================================================
class VoiceOrderHandler {
    constructor(app) {
        this.app = app;
        this.recognition = null;
        this.active = false;
        this.init();
    }

    init() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return;
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'en-IN';
        this.recognition.interimResults = false;
        this.recognition.onresult = (e) => this.parseVoiceOrder(e.results[0][0].transcript);
        this.recognition.onend   = () => this.stopRecording();
        this.recognition.onerror = () => { this.stopRecording(); this.app.showToast('Voice recognition failed. Try again.','error'); };
    }

    startRecording() {
        if (!this.recognition) { this.app.showToast('Voice ordering not supported in this browser.','error'); return; }
        this.active = true;
        document.getElementById('mic-btn')?.classList.add('recording');
        this.app.showToast('🎙️ Listening… Say: "Add 2 kg apples to my cart"','info');
        this.recognition.start();
    }

    stopRecording() {
        this.active = false;
        document.getElementById('mic-btn')?.classList.remove('recording');
    }

    async parseVoiceOrder(transcript) {
        this.app.showToast(`Heard: "${transcript}"`, 'info');
        const lower = transcript.toLowerCase();
        const qtyMatch = lower.match(/(\d+(?:\.\d+)?)\s*(kg|piece|pieces|kgs)?/);
        const qty = qtyMatch ? parseFloat(qtyMatch[1]) : 1;

        const products = await this.app.db.getAll('products');
        const matched  = products.find(p => lower.includes(p.name.toLowerCase().split(' ').pop()) || lower.includes(p.name.toLowerCase()));
        if (!matched) { this.app.showToast('Fruit not found. Please try again.','error'); return; }

        const existing = this.app.cart.find(i => i.id === matched.id);
        if (existing) existing.qty += qty;
        else          this.app.cart.push({ id: matched.id, qty });
        localStorage.setItem('fruit_cart', JSON.stringify(this.app.cart));
        this.app.updateCartUI();
        this.app.showToast(`🛒 Added ${qty} ${matched.unit} of ${matched.name} to cart!`);
    }
}

// ============================================================
// LOYALTY MANAGER
// ============================================================
class LoyaltyManager {
    constructor() {
        this.TIERS = [
            { name:'Bronze',   min:0,    max:99,   icon:'🥉', color:'#cd7f32', perks:'Free delivery on orders >₹500' },
            { name:'Silver',   min:100,  max:499,  icon:'🥈', color:'#94a3b8', perks:'5% discount + priority support' },
            { name:'Gold',     min:500,  max:999,  icon:'🥇', color:'#f59e0b', perks:'10% discount + free gift wrap' },
            { name:'Platinum', min:1000, max:Infinity, icon:'💎', color:'#a78bfa', perks:'15% discount + VIP early access' }
        ];
    }

    getPoints(userId) {
        const data = this.getData(userId);
        return data.points;
    }

    addPoints(userId, orderTotal) {
        const data   = this.getData(userId);
        const earned = Math.floor(orderTotal / 10);
        data.points += earned;
        data.history.push({ earned, orderTotal, date: new Date().toISOString() });
        this.saveData(userId, data);
        return earned;
    }

    getTier(userId) {
        const points = this.getPoints(userId);
        return this.TIERS.slice().reverse().find(t => points >= t.min) || this.TIERS[0];
    }

    getNextTier(userId) {
        const points = this.getPoints(userId);
        return this.TIERS.find(t => t.min > points) || null;
    }

    getReferralCode(userId) {
        return 'FRESH' + userId.toString().toUpperCase().padStart(4,'0');
    }

    getData(userId) {
        const key  = `loyalty_${userId}`;
        const raw  = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : { points:0, history:[] };
    }

    saveData(userId, data) {
        localStorage.setItem(`loyalty_${userId}`, JSON.stringify(data));
    }
}

// ============================================================
// SUBSCRIPTION MANAGER
// ============================================================
class SubscriptionManager {
    constructor(db) { this.db = db; }

    async subscribe(userId, planId) {
        const plan = SUBSCRIPTION_PLANS.find(p => p.id === planId);
        if (!plan) return null;
        const sub = {
            userId, planId,
            planName: plan.name,
            price: plan.price,
            interval: plan.interval,
            status: 'active',
            startDate: new Date().toISOString(),
            nextOrder: this.getNextDate(plan.interval)
        };
        return await this.db.add('subscriptions', sub);
    }

    async getUserSubscriptions(userId) {
        const all = await this.db.getAll('subscriptions');
        return all.filter(s => Number(s.userId) === Number(userId));
    }

    async cancelSubscription(subId) {
        const sub = await this.db.getById('subscriptions', subId);
        if (sub) { sub.status = 'cancelled'; await this.db.update('subscriptions', sub); }
    }

    async pauseSubscription(subId) {
        const sub = await this.db.getById('subscriptions', subId);
        if (sub) { sub.status = sub.status === 'paused' ? 'active' : 'paused'; await this.db.update('subscriptions', sub); }
    }

    getNextDate(interval) {
        const d = new Date();
        if (interval === 'Daily')   d.setDate(d.getDate() + 1);
        if (interval === 'Weekly')  d.setDate(d.getDate() + 7);
        if (interval === 'Monthly') d.setMonth(d.getMonth() + 1);
        return d.toISOString();
    }
}

// ============================================================
// DELIVERY TRACKER
// ============================================================
class DeliveryTracker {
    constructor(app) {
        this.app = app;
        this.stages = [
            { id:'placed',   label:'Order Placed',   icon:'📋', time: 0 },
            { id:'preparing',label:'Preparing',      icon:'👨‍🍳', time: 5000  },
            { id:'picked',   label:'Picked Up',      icon:'📦', time: 10000 },
            { id:'onway',    label:'On the Way',     icon:'🚚', time: 16000 },
            { id:'delivered',label:'Delivered',      icon:'✅', time: 22000 }
        ];
    }

    start(orderId) {
        this.app.toggleModal('delivery-tracker-modal', true);
        this.renderTracker(0, orderId);
        this.stages.forEach((stage, i) => {
            setTimeout(() => this.renderTracker(i, orderId), stage.time);
        });
        setTimeout(() => {
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('FreshFruits: Delivered! ✅', {
                    body: `Order #${orderId} has been delivered. Enjoy your fresh fruits!`,
                    icon: 'https://cdn-icons-png.flaticon.com/512/3143/3143627.png'
                });
            }
        }, 22000);
    }

    renderTracker(activeIndex, orderId) {
        const container = document.getElementById('tracker-stages');
        if (!container) return;
        document.getElementById('tracker-order-id').textContent = `Order #${orderId}`;
        container.innerHTML = this.stages.map((s, i) => `
            <div class="tracker-step ${i < activeIndex ? 'done' : i === activeIndex ? 'active' : ''}">
                <div class="tracker-icon">${s.icon}</div>
                <div class="tracker-label">${s.label}</div>
                ${i < this.stages.length - 1 ? '<div class="tracker-line"></div>' : ''}
            </div>
        `).join('');
        document.getElementById('tracker-eta').textContent =
            activeIndex < this.stages.length - 1
                ? `ETA: ~${Math.ceil((this.stages[4].time - this.stages[activeIndex].time)/60000 + 1)} min`
                : '🎉 Delivered!';
    }
}

// ============================================================
// MAIN APP CLASS
// ============================================================
class App {
    constructor() {
        this.db              = new FruitDB();
        this.user            = JSON.parse(localStorage.getItem('fruit_user')) || null;
        this.cart            = JSON.parse(localStorage.getItem('fruit_cart')) || [];
        this.wishlist        = JSON.parse(localStorage.getItem('fruit_wishlist')) || [];
        this.currentView     = 'home';
        this.activeFilters   = { category:'all', organic:false, local:false, priceMax:1000, healthGoal:'all', search:'' };
        this.loyalty         = new LoyaltyManager();
        this._toastTimer     = null;
        this.init();
    }

    async init() {
        await this.db.init();
        await this.seedProducts();

        if (this.user && this.user.email) {
            const users      = await this.db.getAll('users');
            const latestUser = users.find(u => u.email === this.user.email);
            if (latestUser) { this.user = latestUser; localStorage.setItem('fruit_user', JSON.stringify(this.user)); }
            else            { this.user = null; localStorage.removeItem('fruit_user'); }
        }

        this.recommendEngine = new FruitRecommendationEngine(this.db);
        this.chatbot         = new FruitChatbot(this);
        this.voiceHandler    = new VoiceOrderHandler(this);
        this.subManager      = new SubscriptionManager(this.db);
        this.deliveryTracker = new DeliveryTracker(this);

        this.initFirebase();
        this.setupEventListeners();
        this.updateAuthUI();
        this.updateCartUI();
        this.renderProducts();
        this.renderHomeSections();
        this.setupAnimations();
        this.initChatbot();
    }

    // ─── Firebase ───────────────────────────────────────────
    async initFirebase() {
        try {
            firebase.initializeApp(firebaseConfig);
            this.messaging = firebase.messaging();
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                const token = await this.messaging.getToken({ vapidKey: 'YOUR_VAPID_KEY' });
                if (token) console.log('FCM Token:', token);
            }
            this.messaging.onMessage(payload => {
                this.showToast(payload.notification.title + ': ' + payload.notification.body);
            });
        } catch (e) {
            console.warn('Firebase skipped:', e.message);
        }
    }

    // ─── Seed ────────────────────────────────────────────────
    async seedProducts() {
        const today = new Date();
        const daysAgo = (n) => { const d = new Date(today); d.setDate(d.getDate()-n); return d.toISOString().split('T')[0]; };

        const initialFruits = [
            { name:'Organic Mango',      price:120, stock:50, category:'tropical', status:'Available', unit:'kg',    organic:true,  isLocal:true,  freshnessScore:88, harvestDate:daysAgo(2), farmSource:'Alphonso Farm, Ratnagiri',   image:'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=400', rating:4.8 },
            { name:'Crispy Apple',        price:180, stock:30, category:'seasonal', status:'Available', unit:'kg',    organic:false, isLocal:false, freshnessScore:92, harvestDate:daysAgo(1), farmSource:'Himachal Valley Orchards',   image:'https://images.unsplash.com/photo-1568702846914-96090560e10e?auto=format&fit=crop&q=80&w=400', rating:4.6 },
            { name:'Fresh Strawberries',  price:250, stock:20, category:'berries',  status:'Available', unit:'kg',    organic:true,  isLocal:true,  freshnessScore:78, harvestDate:daysAgo(3), farmSource:'Mahabaleshwar Berry Farm',   image:'https://images.unsplash.com/photo-1518118014389-724e03102434?auto=format&fit=crop&q=80&w=400', rating:4.9 },
            { name:'Sweet Banana',        price:60,  stock:100,category:'tropical', status:'Available', unit:'kg',    organic:true,  isLocal:true,  freshnessScore:95, harvestDate:daysAgo(1), farmSource:'Kerala Banana Estates',      image:'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=400', rating:4.5 },
            { name:'Blueberries',         price:400, stock:15, category:'berries',  status:'Available', unit:'kg',    organic:true,  isLocal:false, freshnessScore:82, harvestDate:daysAgo(2), farmSource:'Imported — USA Farms',       image:'https://images.unsplash.com/photo-1425934322444-cbd9b1fa9044?auto=format&fit=crop&q=80&w=400', rating:4.7 },
            { name:'Dragon Fruit',        price:350, stock:12, category:'tropical', status:'Available', unit:'piece', organic:false, isLocal:false, freshnessScore:71, harvestDate:daysAgo(4), farmSource:'Imported — Vietnam',         image:'https://images.unsplash.com/photo-1510442340621-0a6eaefaaab2?auto=format&fit=crop&q=80&w=400', rating:4.4 },
            { name:'Golden Pineapple',    price:90,  stock:40, category:'tropical', status:'Available', unit:'piece', organic:false, isLocal:true,  freshnessScore:89, harvestDate:daysAgo(2), farmSource:'Coorg Plantation, Karnataka', image:'https://images.unsplash.com/photo-1587883012610-e3df17d41270?auto=format&fit=crop&q=80&w=400', rating:4.3 },
            { name:'Red Grapes',          price:220, stock:25, category:'seasonal', status:'Available', unit:'kg',    organic:false, isLocal:true,  freshnessScore:76, harvestDate:daysAgo(3), farmSource:'Nashik Vineyard, Maharashtra', image:'https://images.unsplash.com/photo-1596316279148-3563dc682e8e?auto=format&fit=crop&q=80&w=400', rating:4.5 },
            { name:'Pomegranate',         price:190, stock:35, category:'seasonal', status:'Available', unit:'kg',    organic:true,  isLocal:true,  freshnessScore:91, harvestDate:daysAgo(1), farmSource:'Solapur Farms, Maharashtra',  image:'https://images.unsplash.com/photo-1615486171449-41ec223bfb06?auto=format&fit=crop&q=80&w=400', rating:4.8 },
            { name:'Kiwi Fruit',          price:280, stock:20, category:'tropical', status:'Available', unit:'piece', organic:false, isLocal:false, freshnessScore:84, harvestDate:daysAgo(3), farmSource:'Imported — New Zealand',     image:'https://images.unsplash.com/photo-1560155016146-21dc8f7574ea?auto=format&fit=crop&q=80&w=400', rating:4.6 },
            { name:'Ripe Oranges',        price:110, stock:60, category:'seasonal', status:'Available', unit:'kg',    organic:true,  isLocal:true,  freshnessScore:93, harvestDate:daysAgo(1), farmSource:'Nagpur Citrus Farm',         image:'https://images.unsplash.com/photo-1611080663583-20914e6eeb23?auto=format&fit=crop&q=80&w=400', rating:4.7 },
            { name:'Hass Avocados',       price:450, stock:18, category:'tropical', status:'Available', unit:'piece', organic:false, isLocal:false, freshnessScore:79, harvestDate:daysAgo(4), farmSource:'Imported — Mexico',          image:'https://images.unsplash.com/photo-1604285141012-706f33d7b43a?auto=format&fit=crop&q=80&w=400', rating:4.5 },
            { name:'Sweet Cherries',      price:600, stock:10, category:'berries',  status:'Available', unit:'kg',    organic:false, isLocal:false, freshnessScore:68, harvestDate:daysAgo(5), farmSource:'Imported — USA',             image:'https://images.unsplash.com/photo-1568289873099-b1d5bd2dd651?auto=format&fit=crop&q=80&w=400', rating:4.9 },
            { name:'Passion Fruit',       price:320, stock:15, category:'tropical', status:'Available', unit:'piece', organic:true,  isLocal:true,  freshnessScore:85, harvestDate:daysAgo(2), farmSource:'Tamil Nadu Farms',           image:'https://images.unsplash.com/photo-1596001007907-735ab0adcd5e?auto=format&fit=crop&q=80&w=400', rating:4.4 },
            { name:'Fresh Watermelon',    price:45,  stock:80, category:'seasonal', status:'Available', unit:'piece', organic:false, isLocal:true,  freshnessScore:96, harvestDate:daysAgo(1), farmSource:'Rajasthan Fields',           image:'https://images.unsplash.com/photo-1589047915570-5b62b14421cc?auto=format&fit=crop&q=80&w=400', rating:4.6 },
            { name:'Papaya',              price:150, stock:25, category:'tropical', status:'Available', unit:'piece', organic:true,  isLocal:true,  freshnessScore:87, harvestDate:daysAgo(2), farmSource:'Tamil Nadu Farms',           image:'https://images.unsplash.com/photo-1517282009859-f000ef1b7829?auto=format&fit=crop&q=80&w=400', rating:4.3 }
        ];

        const products = await this.db.getAll('products');
        for (const fruit of initialFruits) {
            const existing = products.find(p => p.name === fruit.name);
            if (!existing) {
                await this.db.add('products', fruit);
            } else {
                // Update new fields if missing
                const updated = { ...fruit, ...existing,
                    organic: existing.organic ?? fruit.organic,
                    isLocal: existing.isLocal ?? fruit.isLocal,
                    freshnessScore: existing.freshnessScore ?? fruit.freshnessScore,
                    harvestDate: existing.harvestDate ?? fruit.harvestDate,
                    farmSource: existing.farmSource ?? fruit.farmSource,
                    rating: existing.rating ?? fruit.rating
                };
                await this.db.update('products', updated);
            }
        }

        const users = await this.db.getAll('users');
        if (!users.find(u => u.email === 'admin@fruit.com'))
            await this.db.add('users', { name:'Admin User', email:'admin@fruit.com', password:'admin', role:'admin', address:'Admin HQ' });
        if (!users.find(u => u.email === 'farmer@fruit.com'))
            await this.db.add('users', { name:'Demo Farmer', email:'farmer@fruit.com', password:'farmer', role:'farmer', address:'Green Farm, Tamil Nadu' });

        localStorage.setItem('fruit_seeded_v4', 'true');
    }

    // ─── Event Listeners ─────────────────────────────────────
    setupEventListeners() {
        document.querySelectorAll('[data-view]').forEach(link =>
            link.addEventListener('click', e => { e.preventDefault(); this.showView(link.dataset.view); })
        );

        const cartToggle  = document.getElementById('cart-toggle');
        const cartSidebar = document.getElementById('cart-sidebar');
        const closeCart   = document.getElementById('close-cart');
        cartToggle?.addEventListener('click', () => cartSidebar.classList.add('active'));
        closeCart?.addEventListener('click',  () => cartSidebar.classList.remove('active'));

        document.getElementById('checkout-btn')?.addEventListener('click', () => this.handleCheckout());
        document.getElementById('auth-form')?.addEventListener('submit', e => this.handleAuth(e));
        document.getElementById('logout-btn')?.addEventListener('click', () => this.handleLogout());

        // Filters
        document.getElementById('product-search')?.addEventListener('input', e => {
            this.activeFilters.search = e.target.value; this.renderProducts();
        });
        document.getElementById('category-filter')?.addEventListener('change', e => {
            this.activeFilters.category = e.target.value; this.renderProducts();
        });
        document.getElementById('organic-filter')?.addEventListener('change', e => {
            this.activeFilters.organic = e.target.checked; this.renderProducts();
        });
        document.getElementById('local-filter')?.addEventListener('change', e => {
            this.activeFilters.local = e.target.checked; this.renderProducts();
        });
        document.getElementById('price-filter')?.addEventListener('input', e => {
            this.activeFilters.priceMax = Number(e.target.value);
            document.getElementById('price-label').textContent = `Up to ₹${e.target.value}`;
            this.renderProducts();
        });
        document.getElementById('health-goal-filter')?.addEventListener('change', e => {
            this.activeFilters.healthGoal = e.target.value; this.renderProducts();
        });

        // Admin
        document.getElementById('admin-panel-btn')?.addEventListener('click', () => this.showView('admin'));

        // Modal close
        document.getElementById('modal-overlay')?.addEventListener('click', e => {
            if (e.target.id === 'modal-overlay') this.toggleModal('product-modal-container', false);
        });
        document.querySelector('.close-modal-product')?.addEventListener('click', () =>
            this.toggleModal('product-modal-container', false)
        );

        // Chatbot
        document.getElementById('chatbot-input')?.addEventListener('keydown', e => {
            if (e.key === 'Enter') this.chatbot.handleInput();
        });
        document.getElementById('chatbot-send-btn')?.addEventListener('click', () => this.chatbot.handleInput());

        // Mic
        document.getElementById('mic-btn')?.addEventListener('click', () => this.voiceHandler.startRecording());
    }

    // ─── View System ─────────────────────────────────────────
    showView(viewId) {
        if (viewId === 'admin'   && (!this.user || this.user.role !== 'admin'))   { this.showToast('Admin access required','error'); return; }
        if (viewId === 'farmer'  && (!this.user || this.user.role !== 'farmer'))  { this.showToast('Farmer access required','error'); return; }
        if (viewId === 'profile' && !this.user)                                   { this.showLoginView('login'); return; }

        document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
        const target = document.getElementById(`${viewId}-view`);
        if (target) { target.classList.remove('hidden'); this.currentView = viewId; }

        if (viewId === 'admin')         this.renderAdminDashboard();
        if (viewId === 'farmer')        this.renderFarmerDashboard();
        if (viewId === 'profile')       { this.renderUserOrders(); this.renderProfileSettings(); this.renderLoyaltyCard(); this.renderWishlist(); }
        if (viewId === 'subscriptions') this.renderSubscriptionPlans();
        if (viewId === 'recommend')     this.renderRecommendSection();
        if (viewId === 'home')          this.renderHomeSections();

        document.querySelectorAll('[data-view]').forEach(l => {
            l.style.color      = l.dataset.view === viewId ? 'var(--primary)' : '';
            l.style.fontWeight = l.dataset.view === viewId ? 'bold' : '';
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ─── Home Sections ───────────────────────────────────────
    async renderHomeSections() {
        await this.renderBestSellers();
        await this.renderDailyPick();
    }

    async renderBestSellers() {
        const orders   = await this.db.getAll('orders');
        const products = await this.db.getAll('products');
        const salesMap = {};
        orders.forEach(o => o.items?.forEach(item => { salesMap[item.id] = (salesMap[item.id]||0) + item.qty; }));
        const top = Object.entries(salesMap)
            .map(([id,qty]) => ({ ...products.find(p=>p.id===Number(id)), totalSold:qty }))
            .filter(p=>p.name).sort((a,b)=>b.totalSold-a.totalSold).slice(0,4);
        const grid = document.getElementById('best-sellers-grid');
        if (!grid) return;
        const display = top.length ? top : (await this.db.getAll('products')).slice(0,4);
        grid.innerHTML = display.map(p => this.createProductCardHTML(p)).join('');
    }

    async renderDailyPick() {
        if (!this.recommendEngine) return;
        const pick = await this.recommendEngine.getDailyPick();
        const box  = document.getElementById('daily-pick-box');
        if (!box || !pick) return;
        const n = FRUIT_NUTRITION_DB[pick.name] || {};
        box.innerHTML = `
            <div class="daily-pick-card">
                <img src="${pick.image}" alt="${pick.name}">
                <div class="daily-pick-info">
                    <span class="daily-badge">🌟 Today's Pick</span>
                    <h3>${pick.name}</h3>
                    <p>${n.calories||'—'} kcal · ${n.vitaminC||'—'}mg Vit C · ${n.fiber||'—'}g Fibre</p>
                    <p class="farm-tag">📍 ${pick.farmSource||'Local Farm'}</p>
                    <button class="btn-primary" onclick="app.addToCart(${pick.id})">Add to Cart — ₹${pick.price}/${pick.unit}</button>
                </div>
            </div>`;
    }

    // ─── Recommendation Section ──────────────────────────────
    async renderRecommendSection() {
        const container = document.getElementById('recommend-results');
        if (!container) return;
        container.innerHTML = '<p class="empty-msg">Select a health goal above to see your personalised fruit list 🍓</p>';
    }

    async showRecommendations(goalKey) {
        document.querySelectorAll('.goal-card').forEach(c => c.classList.remove('active'));
        document.getElementById(`goal-${goalKey}`)?.classList.add('active');
        const results = await this.recommendEngine.getRecommendations(goalKey);
        const goal    = HEALTH_GOALS[goalKey];
        const container = document.getElementById('recommend-results');
        if (!container) return;
        container.innerHTML = `
            <div class="recommend-tip"><span>${goal.icon}</span><p>${goal.tip}</p></div>
            <div class="product-grid">${results.map(p => this.createProductCardHTML(p)).join('')}</div>`;
    }

    // ─── Products ────────────────────────────────────────────
    async renderProducts() {
        let products = await this.db.getAll('products');
        const f = this.activeFilters;

        // Apply filters
        products = products.filter(p => {
            const matchSearch   = !f.search   || p.name.toLowerCase().includes(f.search.toLowerCase());
            const matchCat      = f.category === 'all' || p.category === f.category;
            const matchOrganic  = !f.organic  || p.organic;
            const matchLocal    = !f.local    || p.isLocal;
            const matchPrice    = p.price <= (f.priceMax || 99999);
            const matchGoal     = f.healthGoal === 'all' || (HEALTH_GOALS[f.healthGoal]?.fruits.includes(p.name));
            return matchSearch && matchCat && matchOrganic && matchLocal && matchPrice && matchGoal;
        });

        const featuredGrid = document.getElementById('featured-grid');
        if (featuredGrid) {
            const featured = (await this.db.getAll('products')).slice(0,4);
            featuredGrid.innerHTML = featured.map(p => this.createProductCardHTML(p)).join('');
        }

        const mainGrid = document.getElementById('main-product-grid');
        if (mainGrid && this.currentView === 'products') {
            mainGrid.innerHTML = products.length
                ? products.map(p => this.createProductCardHTML(p)).join('')
                : '<div class="empty-search">🔍 No fruits match your filters.</div>';
        }
    }

    createProductCardHTML(p) {
        const score  = p.freshnessScore || 80;
        const fColor = score >= 70 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444';
        const fLabel = score >= 70 ? 'Fresh'   : score >= 40 ? 'Good'   : 'Use Soon';
        const n      = FRUIT_NUTRITION_DB[p.name] || {};
        const inWish = this.wishlist.includes(p.id);
        const stars  = '⭐'.repeat(Math.round(p.rating||4));

        return `
        <div class="product-card" id="card-${p.id}">
            <div class="product-img-wrap">
                <img src="${p.image}" alt="${p.name}" class="product-image">
                <button class="wishlist-btn ${inWish?'active':''}" onclick="app.toggleWishlist(${p.id})" title="Wishlist">
                    ${inWish?'❤️':'🤍'}
                </button>
                ${p.organic ? '<span class="organic-badge">🌿 Organic</span>' : ''}
                <div class="freshness-badge" style="background:${fColor}22; color:${fColor}; border-color:${fColor}">
                    ${fLabel} · ${score}
                </div>
            </div>
            <div class="product-info">
                <div class="product-rating">${stars} <span class="rating-num">(${p.rating||4}.0)</span></div>
                <h3>${p.name}</h3>
                <p class="farm-tag">📍 ${p.farmSource||'Local Farm'}</p>
                <div class="freshness-bar-wrap">
                    <div class="freshness-bar" style="width:${score}%; background:${fColor}"></div>
                </div>
                <p class="product-price">₹${p.price} <span class="unit-label">/ ${p.unit||'kg'}</span></p>
                <p class="product-stock ${p.stock<10?'low-stock':''}">
                    ${p.stock<10?'⚠️ Only ':''}${p.stock} ${p.unit||'kg'} left
                </p>
                <div class="card-nutrition">
                    <span>🔥${n.calories||'—'}kcal</span>
                    <span>💊Vit C ${n.vitaminC||'—'}mg</span>
                    <span>🌾${n.fiber||'—'}g fibre</span>
                </div>
                <div class="card-actions">
                    <button class="btn-primary" onclick="app.addToCart(${p.id})">Add to Cart</button>
                    <button class="btn-outline btn-sm" onclick="app.showNutritionModal(${p.id})">📊 Nutrition</button>
                </div>
            </div>
        </div>`;
    }

    // ─── Nutrition Modal ─────────────────────────────────────
    async showNutritionModal(productId) {
        const product = await this.db.getById('products', Number(productId));
        if (!product) return;
        const n = FRUIT_NUTRITION_DB[product.name] || {};
        document.getElementById('nutrition-modal-title').textContent = `${product.name} — Nutrition Info`;
        document.getElementById('nutrition-modal-body').innerHTML = `
            <div class="nutrition-grid">
                <div class="nut-card"><span class="nut-icon">🔥</span><div class="nut-val">${n.calories||'—'}</div><div class="nut-label">Calories (kcal)</div></div>
                <div class="nut-card"><span class="nut-icon">💪</span><div class="nut-val">${n.protein||'—'}g</div><div class="nut-label">Protein</div></div>
                <div class="nut-card"><span class="nut-icon">🌾</span><div class="nut-val">${n.carbs||'—'}g</div><div class="nut-label">Carbohydrates</div></div>
                <div class="nut-card"><span class="nut-icon">🌿</span><div class="nut-val">${n.fiber||'—'}g</div><div class="nut-label">Fibre</div></div>
                <div class="nut-card"><span class="nut-icon">🍬</span><div class="nut-val">${n.sugar||'—'}g</div><div class="nut-label">Sugar</div></div>
                <div class="nut-card"><span class="nut-icon">🍊</span><div class="nut-val">${n.vitaminC||'—'}mg</div><div class="nut-label">Vitamin C</div></div>
                <div class="nut-card"><span class="nut-icon">👁️</span><div class="nut-val">${n.vitaminA||'—'}µg</div><div class="nut-label">Vitamin A</div></div>
                <div class="nut-card"><span class="nut-icon">⚡</span><div class="nut-val">${n.potassium||'—'}mg</div><div class="nut-label">Potassium</div></div>
            </div>
            <div class="nutrition-meta">
                <p>📍 <strong>Farm:</strong> ${product.farmSource||'Local'}</p>
                <p>📅 <strong>Harvested:</strong> ${product.harvestDate||'Recently'}</p>
                <p>🌿 <strong>Organic:</strong> ${product.organic?'Yes ✅':'No'}</p>
                <p>🏠 <strong>Local:</strong> ${product.isLocal?'Yes ✅':'Imported'}</p>
            </div>`;
        this.toggleModal('nutrition-modal-container', true);
    }

    // ─── Wishlist ─────────────────────────────────────────────
    toggleWishlist(productId) {
        const idx = this.wishlist.indexOf(productId);
        if (idx === -1) { this.wishlist.push(productId); this.showToast('❤️ Added to Wishlist!'); }
        else            { this.wishlist.splice(idx,1);   this.showToast('💔 Removed from Wishlist'); }
        localStorage.setItem('fruit_wishlist', JSON.stringify(this.wishlist));
        this.renderProducts();
        if (this.currentView === 'profile') this.renderWishlist();
    }

    async renderWishlist() {
        const container = document.getElementById('wishlist-tab-content');
        if (!container) return;
        if (this.wishlist.length === 0) { container.innerHTML = '<p class="empty-msg">Your wishlist is empty. Tap ❤️ on any fruit to save it!</p>'; return; }
        const products  = await this.db.getAll('products');
        const items     = this.wishlist.map(id => products.find(p=>p.id===id)).filter(Boolean);
        container.innerHTML = `<div class="product-grid">${items.map(p=>this.createProductCardHTML(p)).join('')}</div>`;
    }

    // ─── Loyalty Card ─────────────────────────────────────────
    renderLoyaltyCard() {
        const container = document.getElementById('loyalty-tab-content');
        if (!container || !this.user) return;
        const points  = this.loyalty.getPoints(this.user.id);
        const tier    = this.loyalty.getTier(this.user.id);
        const next    = this.loyalty.getNextTier(this.user.id);
        const code    = this.loyalty.getReferralCode(this.user.id);
        const pct     = next ? Math.min(100, ((points - tier.min)/(next.min - tier.min))*100) : 100;
        container.innerHTML = `
            <div class="loyalty-card" style="border-color:${tier.color}">
                <div class="loyalty-header">
                    <div>
                        <div class="tier-badge" style="color:${tier.color}">${tier.icon} ${tier.name} Member</div>
                        <div class="loyalty-points">${points} <span>Points</span></div>
                    </div>
                    <div class="loyalty-perks"><strong>Your Benefits:</strong><br>${tier.perks}</div>
                </div>
                ${next ? `
                <div class="loyalty-progress">
                    <div class="lp-bar-track"><div class="lp-bar-fill" style="width:${pct}%;background:${tier.color}"></div></div>
                    <small>${points} / ${next.min} pts to reach ${next.icon} ${next.name}</small>
                </div>` : '<p style="color:var(--primary);margin-top:1rem;">🎉 You are at the highest tier — Platinum!</p>'}
                <div class="referral-box">
                    <strong>🎁 Your Referral Code:</strong>
                    <div class="referral-code" onclick="navigator.clipboard.writeText('${code}');app.showToast('Code copied!')">
                        ${code} <span>📋 Copy</span>
                    </div>
                    <small>Share this code & earn 50 bonus points per referral!</small>
                </div>
            </div>`;
    }

    // ─── Subscriptions ────────────────────────────────────────
    async renderSubscriptionPlans() {
        const grid = document.getElementById('subscription-plans-grid');
        if (!grid) return;
        const mySubs = this.user ? await this.subManager.getUserSubscriptions(this.user.id) : [];
        grid.innerHTML = SUBSCRIPTION_PLANS.map(plan => {
            const activeSub = mySubs.find(s => s.planId === plan.id && s.status === 'active');
            return `
            <div class="sub-plan-card ${activeSub?'active-plan':''}">
                ${plan.badge ? `<div class="sub-badge">${plan.badge}</div>` : ''}
                <div class="sub-icon">${plan.icon}</div>
                <h3>${plan.name}</h3>
                <p class="sub-price">₹${plan.price} <span>/ ${plan.interval}</span></p>
                <p class="sub-desc">${plan.fruits}</p>
                <ul class="sub-features">
                    <li>✅ Free doorstep delivery</li>
                    <li>✅ Freshest seasonal picks</li>
                    <li>✅ Pause or cancel anytime</li>
                    <li>✅ Double loyalty points</li>
                </ul>
                ${activeSub
                    ? `<div class="sub-active-info">
                           <span class="status-badge delivered">Active</span>
                           <small>Next order: ${new Date(activeSub.nextOrder).toLocaleDateString()}</small>
                           <div style="display:flex;gap:.5rem;margin-top:.5rem;">
                               <button class="btn-outline btn-sm" onclick="app.pauseSubscription(${activeSub.id})">Pause</button>
                               <button class="btn-outline btn-sm" style="color:var(--error)" onclick="app.cancelSubscription(${activeSub.id})">Cancel</button>
                           </div>
                       </div>`
                    : `<button class="btn-primary btn-block" onclick="app.subscribeNow('${plan.id}')">Subscribe Now</button>`
                }
            </div>`;
        }).join('');
    }

    async subscribeNow(planId) {
        if (!this.user) { this.showLoginView('login'); this.showToast('Login to subscribe','error'); return; }
        await this.subManager.subscribe(this.user.id, planId);
        this.showToast('🎉 Subscription activated!');
        this.renderSubscriptionPlans();
    }

    async pauseSubscription(subId) {
        await this.subManager.pauseSubscription(subId);
        this.showToast('Subscription paused');
        this.renderSubscriptionPlans();
    }

    async cancelSubscription(subId) {
        if (!confirm('Cancel this subscription?')) return;
        await this.subManager.cancelSubscription(subId);
        this.showToast('Subscription cancelled');
        this.renderSubscriptionPlans();
    }

    // ─── Farmer Dashboard ─────────────────────────────────────
    async renderFarmerDashboard() {
        if (!this.user || this.user.role !== 'farmer') return;
        const allProducts = await this.db.getAll('products');
        const myProducts  = allProducts.filter(p => p.addedBy === this.user.id);
        const myProductIds = myProducts.map(p => p.id);
        const allOrders   = await this.db.getAll('orders');
        
        const myOrders = allOrders.filter(o => o.items && o.items.some(i => myProductIds.includes(i.id)));
        
        let farmerRevenue = 0;
        const orderRows = [];

        myOrders.forEach(o => {
            let orderFarmerTotal = 0;
            let itemsText = [];
            o.items.forEach(i => {
                if (myProductIds.includes(i.id)) {
                    orderFarmerTotal += i.price * i.qty;
                    itemsText.push(`${i.name} (x${i.qty})`);
                }
            });
            farmerRevenue += orderFarmerTotal;
            
            orderRows.push(`
                <tr>
                    <td>#${o.id}</td>
                    <td>${new Date(o.timestamp).toLocaleDateString()}</td>
                    <td>${o.userName}</td>
                    <td style="font-size:0.8rem">${itemsText.join(', ')}</td>
                    <td style="color:var(--primary); font-weight:bold;">₹${orderFarmerTotal.toFixed(2)}</td>
                    <td><span class="rank-badge ${o.status==='Delivered'?'rank-1':'rank-2'}">${o.status}</span></td>
                </tr>
            `);
        });

        document.getElementById('farmer-product-count').textContent = myProducts.length;
        document.getElementById('farmer-order-count').textContent   = myOrders.length;
        document.getElementById('farmer-revenue').textContent       = '₹' + farmerRevenue.toFixed(2);

        const productList = document.getElementById('farmer-product-list');
        productList.innerHTML = myProducts.length
            ? myProducts.map(p => `
                <tr>
                    <td><img src="${p.image}" class="table-img" style="width:40px;height:40px;border-radius:8px;object-fit:cover;"></td>
                    <td><strong>${p.name}</strong></td>
                    <td>₹${p.price}/${p.unit||'kg'}</td>
                    <td class="${p.stock<10?'low-stock':''}">${p.stock}</td>
                    <td><div class="freshness-badge" style="position:static; display:inline-block; font-size:.75rem">${p.freshnessScore||80}/100</div></td>
                    <td>
                        <button class="btn-icon" onclick="app.showEditProductModal(${p.id})">✏️</button>
                        <button class="btn-icon" onclick="app.deleteProduct(${p.id})">🗑️</button>
                    </td>
                </tr>`).join('')
            : '<tr><td colspan="6" style="text-align:center;color:var(--text-gray)">No products yet. Add your first fruit!</td></tr>';

        const orderList = document.getElementById('farmer-orders-list');
        if (orderList) {
            orderList.innerHTML = orderRows.length 
                ? orderRows.join('')
                : '<tr><td colspan="6" style="text-align:center;color:var(--text-gray)">No orders yet for your produce.</td></tr>';
        }
    }

    // ─── Checkout & Payment ───────────────────────────────────
    async handleCheckout() {
        if (!this.user)         { this.showLoginView('login'); this.showToast('Please login to checkout','error'); return; }
        if (!this.cart.length)  { this.showToast('Your basket is empty','error'); return; }
        this.toggleModal('payment-modal-container', true);
    }

    async processPayment(method) {
        this.toggleModal('payment-modal-container', false);
        if (method !== 'Cash on Delivery') {
            this.showToast(`Initialising ${method} payment…`, 'info');
            await new Promise(r => setTimeout(r, 2000));
            this.showToast(`${method} Payment Successful! ✅`);
        }
        await this.placeOrder(method);
    }

    async placeOrder(paymentMethod) {
        const products = await this.db.getAll('products');
        let total = 0;
        const items = this.cart.map(item => {
            const product = products.find(p => p.id === item.id);
            total += product.price * item.qty;
            return { ...item, name:product.name, price:product.price, unit:product.unit||'kg' };
        });

        const order = {
            userId: this.user.id, userName: this.user.name,
            items, total,
            status:'Placed',
            timestamp: new Date().toISOString(),
            paymentMethod,
            deliveryStatus: 'placed'
        };

        let orderId;
        try { orderId = await this.db.add('orders', order); order.id = orderId; }
        catch(e) { this.showToast('Failed to save order','error'); return; }

        for (const item of this.cart) {
            const product = products.find(p => p.id === item.id);
            product.stock -= item.qty;
            await this.db.update('products', product);
        }

        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('FreshFruits: Order Placed! 🎉', {
                body: `Your order #${orderId} via ${paymentMethod} is confirmed!`,
                icon: 'https://cdn-icons-png.flaticon.com/512/3143/3143627.png'
            });
        }

        // Award loyalty points
        if (this.user) {
            const earned = this.loyalty.addPoints(this.user.id, total);
            setTimeout(() => this.showToast(`⭐ You earned ${earned} loyalty points!`, 'info'), 4000);
        }

        this.cart = [];
        localStorage.removeItem('fruit_cart');
        this.updateCartUI();
        document.getElementById('cart-sidebar').classList.remove('active');
        this.showToast('Order placed successfully! 🎉');
        this.renderProducts();
        if (this.currentView === 'admin') this.renderAdminDashboard();

        // Delivery delay message
        setTimeout(() => this.showToast('🚚 Est. delivery: 30–60 min. Tracking started!','info'), 3000);
        // Start delivery tracker
        setTimeout(() => this.deliveryTracker.start(orderId), 1500);
    }

    // ─── Admin Dashboard ──────────────────────────────────────
    async renderAdminDashboard() {
        const orders   = await this.db.getAll('orders');
        const products = await this.db.getAll('products');
        const users    = await this.db.getAll('users');

        const totalRevenue = orders.reduce((s,o) => s + o.total, 0);
        document.getElementById('admin-revenue').textContent  = `₹${totalRevenue.toFixed(2)}`;
        document.getElementById('admin-orders').textContent   = orders.length;
        document.getElementById('admin-products').textContent = products.length;
        document.getElementById('admin-users')?.textContent !== undefined &&
            (document.getElementById('admin-users').textContent = users.length);

        const productList = document.getElementById('admin-product-list');
        productList.innerHTML = products.map(p => `
            <tr>
                <td><img src="${p.image}" class="table-img"></td>
                <td><strong>${p.name}</strong>${p.organic?'<span class="organic-badge" style="margin-left:.3rem;font-size:.7rem">🌿</span>':''}</td>
                <td>₹${p.price.toFixed(2)} / ${p.unit||'kg'}</td>
                <td class="${p.stock<10?'low-stock':''}">${p.stock}</td>
                <td>
                    <button class="btn-icon" onclick="app.showEditProductModal(${p.id})">✏️</button>
                    <button class="btn-icon" onclick="app.deleteProduct(${p.id})">🗑️</button>
                </td>
            </tr>`).join('');

        const sortedOrders = [...orders].sort((a,b) => new Date(b.timestamp)-new Date(a.timestamp));
        document.getElementById('admin-order-list').innerHTML = sortedOrders.map(o => `
            <tr>
                <td>#${o.id}</td>
                <td>${new Date(o.timestamp).toLocaleDateString()}</td>
                <td>${o.userName}</td>
                <td>₹${o.total.toFixed(2)}</td>
                <td><span class="status-badge ${(o.status||'Placed').toLowerCase()}">${o.status||'Placed'}</span></td>
                <td>
                    <div style="display:flex;gap:.4rem">
                        ${o.status==='Placed'?`<button class="btn-sm" onclick="app.updateOrderStatus(${o.id},'Delivered')">Deliver</button>`:''}
                        <button class="btn-outline btn-sm" onclick="app.printInvoice(${o.id})">🖨️ Bill</button>
                    </div>
                </td>
            </tr>`).join('');

        // Top Selling
        const salesMap = {};
        orders.forEach(o => o.items?.forEach(i => { salesMap[i.id]=(salesMap[i.id]||0)+i.qty; }));
        const topSelling = Object.entries(salesMap)
            .map(([id,qty]) => ({ ...products.find(p=>p.id===Number(id)), totalSold:qty }))
            .filter(p=>p.name).sort((a,b)=>b.totalSold-a.totalSold).slice(0,3);
        document.getElementById('top-selling-list').innerHTML = topSelling.length
            ? topSelling.map((p,i) => `
                <div class="feed-item">
                    <div class="feed-content">
                        <img src="${p.image}" class="feed-img">
                        <div class="feed-info"><h4>${p.name}</h4><small>${p.totalSold} ${p.unit||'kg'} sold</small></div>
                    </div>
                    <span class="rank-badge rank-${i+1}">#${i+1}</span>
                </div>`).join('')
            : '<p class="empty-msg">No sales data yet</p>';

        // Low Stock
        const lowStock = products.filter(p=>p.stock<10);
        document.getElementById('low-stock-alerts').innerHTML = lowStock.length
            ? lowStock.map(p => `
                <div class="feed-item alert-item pulse-alert">
                    <div class="feed-content">
                        <img src="${p.image}" class="feed-img">
                        <div class="feed-info"><h4>${p.name}</h4><small style="color:var(--error);font-weight:bold">Only ${p.stock} ${p.unit||'kg'} left!</small></div>
                    </div>
                    <button class="btn-sm" onclick="app.showEditProductModal(${p.id})">Restock</button>
                </div>`).join('')
            : '<p class="empty-msg" style="color:var(--primary)">All items well stocked! ✨</p>';

        // Activity
        document.getElementById('recent-activity-list').innerHTML = sortedOrders.slice(0,5).map(o => `
            <div class="feed-item ${o.status==='Delivered'?'order-delivered':'order-placed'}">
                <div class="feed-info">
                    <h4>Order #${o.id} ${o.status}</h4>
                    <small>${o.userName} — ₹${o.total.toFixed(2)}</small>
                </div>
                <small>${new Date(o.timestamp).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</small>
            </div>`).join('') || '<p class="empty-msg">No recent activity</p>';
    }

    // ─── Admin CRUD ───────────────────────────────────────────
    async printInvoice(orderId) {
        const orders = await this.db.getAll('orders');
        const order  = orders.find(o => o.id === parseInt(orderId));
        if (!order) return;
        document.getElementById('print-order-id').textContent      = `INVOICE #${order.id.toString().padStart(4,'0')}`;
        document.getElementById('print-date').textContent          = `Date: ${new Date(order.timestamp).toLocaleDateString()}`;
        document.getElementById('print-customer-name').textContent = order.userName;
        document.getElementById('print-customer-address').textContent = order.userAddress||'Address not provided';
        document.getElementById('print-payment').textContent       = order.paymentMethod||'COD';
        document.getElementById('print-total').textContent         = `₹${order.total.toFixed(2)}`;
        document.getElementById('print-items').innerHTML           = (order.items||[]).map(item => `
            <tr>
                <td>${item.name}</td><td>₹${(item.price||0).toFixed(2)}</td>
                <td>${item.qty} ${item.unit||'kg'}</td><td>₹${((item.price||0)*item.qty).toFixed(2)}</td>
            </tr>`).join('');
        window.print();
    }

    showAddProductModal() {
        document.getElementById('product-form').reset();
        document.getElementById('p-id').value = '';
        document.getElementById('product-modal-title').textContent  = 'Add New Fruit';
        document.getElementById('product-submit-btn').textContent   = 'Add Fruit';
        document.getElementById('p-image').required = true;
        this.toggleModal('product-modal-container', true);
    }

    async showEditProductModal(id) {
        const product = await this.db.getById('products', Number(id));
        if (!product) return;
        document.getElementById('p-id').value        = product.id;
        document.getElementById('p-name').value      = product.name;
        document.getElementById('p-price').value     = product.price;
        document.getElementById('p-unit').value      = product.unit||'kg';
        document.getElementById('p-stock').value     = product.stock;
        document.getElementById('p-category').value  = product.category;
        document.getElementById('p-image').required  = false;
        document.getElementById('product-modal-title').textContent = 'Update Fruit';
        document.getElementById('product-submit-btn').textContent  = 'Save Changes';
        this.toggleModal('product-modal-container', true);
    }

    async handleAddProduct(e) {
        e.preventDefault();
        const productId = document.getElementById('p-id').value;
        const file      = document.getElementById('p-image').files[0];

        const saveProduct = async (imageData = null) => {
            const product = {
                name:     document.getElementById('p-name').value,
                price:    parseFloat(document.getElementById('p-price').value),
                unit:     document.getElementById('p-unit').value,
                stock:    parseFloat(document.getElementById('p-stock').value),
                category: document.getElementById('p-category').value,
                status:   'Available',
                addedBy:  this.user?.id
            };
            if (imageData) product.image = imageData;

            if (productId) {
                const existing = await this.db.getById('products', Number(productId));
                await this.db.update('products', { ...existing, ...product });
                this.showToast('Product updated ✨');
            } else {
                if (!imageData) { this.showToast('Please select an image.','error'); return; }
                await this.db.add('products', { ...product, freshnessScore:95, organic:false, isLocal:true });
                this.showToast('Product added!');
            }
            this.toggleModal('product-modal-container', false);
            this.renderAdminDashboard();
            this.renderProducts();
        };

        if (file) { const r = new FileReader(); r.onload = e => saveProduct(e.target.result); r.readAsDataURL(file); }
        else       saveProduct();
    }

    async deleteProduct(id) {
        if (!confirm('Delete this product?')) return;
        try {
            await this.db.delete('products', Number(id));
            this.renderAdminDashboard();
            this.renderProducts();
            this.showToast('Product removed');
        } catch(e) { this.showToast('Failed to remove product','error'); }
    }

    async updateOrderStatus(orderId, newStatus) {
        const order = await this.db.getById('orders', orderId);
        if (order) {
            order.status = newStatus;
            await this.db.update('orders', order);
            this.renderAdminDashboard();
            this.showToast(`Order #${orderId} marked as ${newStatus}`);
            if (newStatus === 'Delivered' && 'Notification' in window && Notification.permission === 'granted') {
                new Notification('FreshFruits: Delivered! 🚚', {
                    body: `Order #${orderId} successfully delivered!`,
                    icon: 'https://cdn-icons-png.flaticon.com/512/3143/3143627.png'
                });
            }
        }
    }

    // ─── Cart ─────────────────────────────────────────────────
    async addToCart(productId) {
        const item = this.cart.find(i => i.id === productId);
        if (item) item.qty++;
        else      this.cart.push({ id: productId, qty: 1 });
        localStorage.setItem('fruit_cart', JSON.stringify(this.cart));
        this.updateCartUI();
        this.showToast('Added to basket 🛒');
    }

    async updateCartQty(productId, delta) {
        const idx = this.cart.findIndex(i => i.id === productId);
        if (idx > -1) {
            this.cart[idx].qty += delta;
            if (this.cart[idx].qty <= 0) this.cart.splice(idx,1);
        }
        localStorage.setItem('fruit_cart', JSON.stringify(this.cart));
        this.updateCartUI();
    }

    updateCartUI() {
        const count = this.cart.reduce((s,i) => s+i.qty, 0);
        document.getElementById('cart-count').textContent = count;
        this.renderCartItems();
    }

    async renderCartItems() {
        const container = document.getElementById('cart-items');
        const products  = await this.db.getAll('products');
        if (!this.cart.length) {
            container.innerHTML = '<p class="empty-msg">Your basket is empty 🧺</p>';
            document.getElementById('cart-total').textContent = '₹0.00';
            return;
        }
        let total = 0;
        container.innerHTML = this.cart.map(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return '';
            const sub = product.price * item.qty;
            total += sub;
            return `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-item-info">
                    <h4>${product.name}</h4>
                    <p>₹${product.price} / ${product.unit||'kg'}</p>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="app.updateCartQty(${item.id},-1)">−</button>
                        <span>${item.qty} ${product.unit||'kg'}</span>
                        <button class="qty-btn" onclick="app.updateCartQty(${item.id},1)">+</button>
                    </div>
                </div>
                <div class="cart-item-price">₹${sub}</div>
            </div>`;
        }).join('');
        document.getElementById('cart-total').textContent = `₹${total.toFixed(2)}`;
    }

    // ─── Auth ─────────────────────────────────────────────────
    showLoginView(type = 'login') {
        const isLogin = type === 'login';
        document.getElementById('auth-title').textContent          = isLogin ? 'LOGIN NOW' : 'REGISTER NOW';
        document.getElementById('auth-submit').textContent         = isLogin ? 'Login Now' : 'Register Now';
        document.getElementById('name-group').style.display        = isLogin ? 'none' : 'block';
        document.getElementById('confirm-pass-group').style.display= isLogin ? 'none' : 'block';
        document.getElementById('role-group').style.display        = isLogin ? 'none' : 'block';
        document.getElementById('auth-toggle-text').textContent    = isLogin ? "Don't have an account?" : 'Already have an account?';
        document.getElementById('toggle-auth-btn').textContent     = isLogin ? 'Register Now' : 'Login Now';
        this.showView('login');
    }

    toggleAuthMode(e) {
        if (e) e.preventDefault();
        const isLogin = document.getElementById('auth-submit').textContent.includes('Login');
        this.showLoginView(isLogin ? 'signup' : 'login');
    }

    async handleAuth(e) {
        e.preventDefault();
        const email    = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;
        const isLogin  = document.getElementById('auth-submit').textContent.toLowerCase().includes('login');

        if (isLogin) {
            const users = await this.db.getAll('users');
            const user  = users.find(u => u.email === email && u.password === password);
            if (user) {
                this.user = user;
                localStorage.setItem('fruit_user', JSON.stringify(user));
                this.updateAuthUI();
                this.showToast(`Welcome back, ${user.name.split(' ')[0]}! 👋`);
                this.requestNotificationPermission();
                this.showView('home');
            } else { this.showToast('Invalid email or password','error'); }
        } else {
            const name            = document.getElementById('reg-name').value;
            const confirmPassword = document.getElementById('auth-confirm-password').value;
            const role            = document.getElementById('auth-role').value;
            if (password !== confirmPassword) { this.showToast('Passwords do not match','error'); return; }
            const newUser = { name, email, password, role, address:'' };
            const id      = await this.db.add('users', newUser);
            this.user     = { ...newUser, id };
            localStorage.setItem('fruit_user', JSON.stringify(this.user));
            this.updateAuthUI();
            this.showToast('Account created! Welcome 🎉');
            this.requestNotificationPermission();
            this.showView('home');
        }
    }

    handleLogout() {
        this.user = null;
        localStorage.removeItem('fruit_user');
        this.updateAuthUI();
        this.showView('home');
        this.showToast('Logged out. See you soon! 👋');
    }

    requestNotificationPermission() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }

    updateAuthUI() {
        const isLoggedIn = !!this.user;
        document.getElementById('auth-links')?.classList.toggle('hidden', isLoggedIn);
        document.getElementById('user-profile')?.classList.toggle('hidden', !isLoggedIn);
        if (this.user) {
            document.getElementById('user-name').textContent = `Hi, ${this.user.name.split(' ')[0]}`;
            document.getElementById('admin-panel-btn')?.classList.toggle('hidden', this.user.role !== 'admin');
            document.getElementById('farmer-panel-btn')?.classList.toggle('hidden', this.user.role !== 'farmer');
        } else {
            document.getElementById('admin-panel-btn')?.classList.add('hidden');
            document.getElementById('farmer-panel-btn')?.classList.add('hidden');
        }
    }

    // ─── Profile ──────────────────────────────────────────────
    async renderUserOrders() {
        if (!this.user) return;
        const allOrders = await this.db.getAll('orders');
        const myOrders  = allOrders.filter(o => Number(o.userId) === Number(this.user.id))
                                   .sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
        const container = document.getElementById('user-orders-list');
        if (!myOrders.length) { container.innerHTML = '<div class="empty-msg">No orders yet. Start shopping! 🛒</div>'; return; }
        container.innerHTML = myOrders.map(o => `
            <div class="admin-section">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
                    <div>
                        <h4>Order #${o.id}</h4>
                        <small style="color:var(--text-gray)">${new Date(o.timestamp).toLocaleString()}</small>
                    </div>
                    <span class="status-badge ${o.status.toLowerCase()}">${o.status}</span>
                </div>
                ${o.items.map(item => `
                    <div style="display:flex;justify-content:space-between;padding:.5rem 0;border-bottom:1px dashed var(--glass-border)">
                        <span>${item.qty} ${item.unit||'kg'} × ${item.name}</span>
                        <span>₹${(item.price*item.qty).toFixed(2)}</span>
                    </div>`).join('')}
                <div style="display:flex;justify-content:space-between;font-weight:bold;margin-top:1rem">
                    <span>Payment: <span style="color:var(--text-gray);font-weight:normal">${o.paymentMethod||'COD'}</span></span>
                    <span>Total: ₹${o.total.toFixed(2)}</span>
                </div>
            </div>`).join('');
    }

    renderProfileSettings() {
        if (!this.user) return;
        document.getElementById('prof-name').value    = this.user.name;
        document.getElementById('prof-email').value   = this.user.email;
        document.getElementById('prof-address').value = this.user.address||'';
        document.getElementById('prof-password').value= '';
    }

    async handleProfileUpdate(e) {
        e.preventDefault();
        if (!this.user) return;
        const updated = { ...this.user,
            name:    document.getElementById('prof-name').value,
            email:   document.getElementById('prof-email').value,
            address: document.getElementById('prof-address').value
        };
        const newPass = document.getElementById('prof-password').value;
        if (newPass) updated.password = newPass;
        try {
            await this.db.update('users', updated);
            this.user = updated;
            localStorage.setItem('fruit_user', JSON.stringify(this.user));
            this.updateAuthUI();
            this.showToast('Profile updated ✨');
        } catch(e) { this.showToast('Update failed','error'); }
    }

    switchProfileTab(tabName) {
        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(`${tabName}-tab-content`)?.classList.remove('hidden');
        const btn = [...document.querySelectorAll('.tab-btn')].find(b => b.dataset.tab === tabName);
        if (btn) btn.classList.add('active');
        if (tabName === 'loyalty')   this.renderLoyaltyCard();
        if (tabName === 'wishlist')  this.renderWishlist();
    }

    // ─── Chatbot ──────────────────────────────────────────────
    initChatbot() {
        this.chatbot.addMessage('bot', '👋 Hi! I\'m FruitBot 🍓 Ask me about nutrition, health goals, seasonal fruits or subscriptions!');
    }

    toggleChatbot() {
        const drawer = document.getElementById('chatbot-drawer');
        drawer?.classList.toggle('open');
    }

    // ─── Misc UI ──────────────────────────────────────────────
    toggleModal(id, show) {
        const overlay = document.getElementById('modal-overlay');
        const modal   = document.getElementById(id);
        if (id === 'payment-modal-container' || id === 'delivery-tracker-modal' || id === 'nutrition-modal-container') {
            // These are self-contained overlays
            document.getElementById(id)?.classList.toggle('hidden', !show);
        } else {
            overlay?.classList.toggle('hidden', !show);
            modal?.classList.toggle('hidden', !show);
        }
    }

    setupAnimations() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    }

    handleContactForm(e) {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        this.showToast(`Thanks ${name}! We'll get back to you soon. 🍊`);
        e.target.reset();
    }

    showToast(msg, type = 'success') {
        const toast = document.getElementById('notification-toast');
        toast.textContent = msg;
        toast.className   = `toast ${type}`;
        toast.classList.remove('hidden');
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => toast.classList.add('hidden'), type === 'info' ? 5000 : 3000);
    }
}

// ─── Global Init ──────────────────────────────────────────────
window.app = new App();
