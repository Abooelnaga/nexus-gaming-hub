# Nexus Gaming Hub

## نظرة عامة

Nexus Gaming Hub هو موقع ويب حديث لعرض منصة ألعاب تفاعلية، يعرض الألعاب، إحصائيات مباشرة، مجتمع اللاعبين، ونشرة بريدية. الموقع مبني باستخدام React وVite ويتميز بتصميم عصري وتجربة مستخدم سلسة.

---

## المميزات الرئيسية

- شريط تنقل ديناميكي
- قسم رئيسي (Hero) جذاب
- عرض للألعاب المميزة
- إحصائيات مباشرة (Live Stats)
- قسم مجتمع اللاعبين وروابط التواصل
- نشرة بريدية للاشتراك
- تذييل (Footer) احترافي

---

## التقنيات المستخدمة

- React 19
- TypeScript
- Vite
- Framer Motion (حركات)
- Lucide React (أيقونات)
- Tailwind CSS (تصميم)

---

## هيكل المشروع

```
components/        # مكونات الواجهة
  ui/              # مكونات فرعية (زر، خلفية جزيئات)
services/          # خدمات وهمية (mockApi)
App.tsx            # التطبيق الرئيسي
index.tsx          # نقطة الدخول
vite.config.ts     # إعدادات Vite
package.json       # تبعيات وأوامر المشروع
README.md          # هذا الملف
```

---

## خطوات التشغيل والتثبيت

1. **تثبيت التبعيات:**
   ```bash
   npm install
   npm install --save-dev @types/node
   ```
2. **تشغيل المشروع محلياً:**

   ```bash
   npm run dev
   ```

   سيفتح الموقع على: http://localhost:3000 أو http://localhost:5173

3. **بناء نسخة الإنتاج:**

   ```bash
   npm run build
   ```

   ستجد الملفات الجاهزة للنشر في مجلد dist

4. **معاينة النسخة المبنية:**
   ```bash
   npm run preview
   ```

---

## جاهز للنشر على GitHub Pages

- تم إعداد سكريبتات النشر تلقائياً في package.json:
  - `predeploy`: يبني المشروع
  - `deploy`: ينشر مجلد dist على GitHub Pages

**خطوات النشر:**

1. تأكد أن الريبو متصل بـ GitHub (remote origin)
2. نفذ:
   ```bash
   npm run deploy
   ```
3. سيتم رفع الموقع تلقائياً على GitHub Pages على الرابط:
   https://Abooelnaga.github.io/nexus-gaming-hub

---

## ملاحظات هامة

- مجلد البناء في Vite هو dist (لا تغيره)
- لا تنسَ تحديث بيانات الريبو في package.json إذا غيرت اسم المستخدم أو الريبو
- يمكنك التعديل بحرية على المكونات والستايل

---

## تجربة الموقع

يمكنك تجربة الموقع مباشرة من هنا: [اضغط هنا لتجربة Nexus Gaming Hub](https://Abooelnaga.github.io/nexus-gaming-hub)

