# Asteria Scouting App

**An Open Source Scouting Application for FTC Teams**

Developed by **Asteria Robotics #32334** to help teams collect fast, reliable, and organized scouting data during competitions.

![App Preview](https://via.placeholder.com/800x400?text=Asteria+Scouting+App+Preview)

---

## ✨ Features

- Simple name-based login
- Match & Team Number input
- Scoring system (1-100 points)
- Multiple photo support
- View your own scouting records
- Edit and delete your records
- **Admin Panel** with:
  - Team ranking by average score
  - All scouting records
  - Photo preview in pop-up

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/asteria32334/asteria-scouting-app.git
cd asteria-scouting-app/asteria_scouting

2. Install Dependencies
Bashflutter pub get
3. Configure Supabase
Open lib/main.dart and update these lines with your own Supabase project credentials:
Darturl: 'https://YOUR-PROJECT-ID.supabase.co',
anonKey: 'YOUR-ANON-PUBLIC-KEY',
4. Run the App
Bashflutter run -d web-server

📱 How to Use
Regular Users

Enter your name
Click "Scouting Yapmaya Başla"
Fill in Match Number, Team Number, Score (1-100), and Notes
Add photos (optional - multiple supported)
Click Save

View Your Records

Click the history icon (📜) in the top right

Admin Access

On the login screen, use password: asteria2026
You can view team rankings and all records


🗄️ Supabase Setup (For Other Teams)

Create a project at supabase.com
Create table scouting_reports with these columns:
Column Name,Type,Nullable
id,uuid,No
match_number,int4,Yes
team_number,int4,Yes
score,int4,Yes
notes,text,Yes
scouted_by,text,Yes
photo_url,text,Yes
created_at,timestamptz,Yes


In Storage, create a public bucket named scouting_photos


🤝 Contributing
We welcome contributions from the FTC community!

Fork the project
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request


📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
