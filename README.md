# LYT Global - Internal Operations Management System

## Overview

LYT Global is an IAA Regulated Consultancy Firm specializing in UK immigration services. This comprehensive internal operations management system helps caseworkers, managers, and administrators efficiently manage immigration cases, generate compliance documents, and track client matters.

## Features

### 🔐 Role-Based Access Control
- **Admin**: Full system access, user management, system configuration
- **Manager**: Case assignment, team management, reporting
- **Caseworker**: Case management, document generation, client communication
- **User**: Basic access for clients/staff

### 📋 Case Management
- View and manage assigned cases
- Track case status (New, In Progress, Document Review, Completed)
- Priority management (High, Medium, Low)
- Search and filter cases
- Case timeline tracking
- Document management

### 📄 Document Generation
Generate professional, IAA-compliant documents:
1. **Client Care Letter** - Initial engagement terms
2. **Letter of Authority** - Client authorization for representation
3. **First Attendance Note** - Consultation records
4. **Closing Letter** - Case completion notification
5. **Signposting Letter** - Resource direction
6. **Service Level Agreement** - Non-regulated services (e.g., Sponsor Licence)

### 🎯 Case Types Supported
- Student Visa
- Skilled Worker Visa
- Sponsor Licence Applications
- Other immigration categories

## Technology Stack

- **Frontend**: React 18 with Vite
- **State Management**: Redux Toolkit with RTK Query
- **Routing**: React Router v7
- **Styling**: TailwindCSS + Bootstrap
- **Icons**: Font Awesome, React Icons
- **Build Tool**: Vite

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
src/
├── assets/
│   └── images/
│       └── logo.png              # Company logo
├── components/
│   ├── Shared/                   # Shared components
│   ├── Login/                    # Login component
│   └── Register/                 # Registration component
├── pages/
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx    # Admin sidebar
│   │   ├── ManagerDashboard.jsx  # Manager sidebar
│   │   ├── CaseworkerDashboard.jsx # Caseworker sidebar
│   │   ├── UserDashboard.jsx     # User sidebar
│   │   ├── Dashboard.jsx         # Main dashboard layout
│   │   ├── Cases/
│   │   │   ├── MyCases.jsx       # Cases list view
│   │   │   └── CaseDetails.jsx   # Individual case details
│   │   └── Documents/
│   │       └── GenerateDocuments.jsx # Document generation
│   ├── Home/                     # Public homepage
│   ├── Services/                 # Services page
│   └── ContactUs/                # Contact page
├── redux/
│   ├── Features/
│   │   ├── Auth/                 # Authentication
│   │   └── Cases/                # Case management
│   └── store.js                  # Redux store configuration
└── routers/
    └── routers.jsx               # Application routes

```

## Dashboard Access

### Caseworker Dashboard
- **My Cases**: View all assigned cases
- **New Assignments**: Recently assigned cases
- **Documents**: Document generation center
- **Profile**: User profile management

### Manager Dashboard
- **Dashboard**: Overview and statistics
- **All Cases**: View all cases in the system
- **Assign Cases**: Assign cases to caseworkers
- **Team Management**: Manage team members
- **Reports**: Generate management reports

### Admin Dashboard
- **Dashboard**: System overview
- **All Cases**: Full case management
- **All Users**: User management
- **System Settings**: Configuration
- **Reports**: System-wide reports

## Document Templates

All document templates include:
- Professional LYT Global branding
- IAA regulatory compliance
- Company header with logo
- Proper formatting for printing/PDF
- Legal disclaimers and footers

### Using Document Generator

1. Navigate to a case
2. Click "Generate Documents" tab
3. Select a template
4. Fill in required information
5. Preview and/or print the document

## API Integration

The system uses RTK Query for API integration:

```javascript
// Example: Fetching cases
const { data: cases, isLoading } = useGetCasesQuery(filters);

// Example: Creating a case
const [createCase] = useCreateCaseMutation();
await createCase(caseData);
```

### API Endpoints Structure

```
/api/cases              GET, POST
/api/cases/:id          GET, PATCH, DELETE
/api/cases/my-cases     GET
/api/cases/:id/documents POST
```

## Environment Variables

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

## Security Features

- JWT-based authentication
- Role-based access control
- Protected routes
- Secure document generation
- HTTPS in production

## Compliance

This system is designed for an **IAA Regulated Consultancy Firm** and includes:
- Professional document templates
- Compliance tracking
- Audit trails
- Secure data handling
- Regulatory-compliant workflows

## Development Notes

### Mock Data
Currently using mock data for development. In production, connect to your backend API by:
1. Setting `VITE_API_URL` environment variable
2. Implementing backend endpoints matching the API structure
3. Removing mock data from components

### Adding New Document Templates
1. Add template to `documentTemplates` array in `GenerateDocuments.jsx`
2. Implement template content in `getDocumentContent()` function
3. Add any template-specific form fields

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - LYT Global Internal Use Only

## Support

For technical support or questions:
- Email: support@lytglobal.com
- Internal Wiki: [Link to internal documentation]

---

**Built with ❤️ for LYT Global Team**
