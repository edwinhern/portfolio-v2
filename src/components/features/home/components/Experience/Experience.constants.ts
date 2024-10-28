import { EmploymentType, type ExperienceItem } from "./Experience.types";

export const experiences: ExperienceItem[] = [
	{
		company: "Tesla Inc.",
		title: "Software Engineer II",
		date: {
			start: new Date(2023, 6, 1),
			end: new Date(2024, 6, 31),
		},
		description:
			"Worked full-stack to build the admin configuration portal for Tesla's new Payroll System. Transitioned to the frontend team to lead the development of the admin portal. Contributed to backend micro-services using C# and MySQL, and helped in onboarding new team members.",
		employmentType: EmploymentType.FullTime,
		image: "/assets/companies/tesla.jpg",
		skills: ["React", "TypeScript", "C#", "MySQL"],
	},
	{
		company: "Tesla Inc.",
		title: "Software Engineer",
		date: {
			start: new Date(2022, 7, 1),
			end: new Date(2022, 11, 31),
		},
		description:
			"Enhanced the employee persona experience, focusing on features for timecard and schedule views using Angular, as part of Tesla’s new Payroll System. Contributed to backend micro-services using .NET Core.",
		employmentType: EmploymentType.Intern,
		image: "/assets/companies/tesla-02.jpg",
		skills: ["Angular", "TypeScript", "C#", "MySQL"],
	},
	{
		company: "JPMorgan Chase & Co.",
		title: "Software Engineer",
		date: {
			start: new Date(2022, 5, 1),
			end: new Date(2022, 7, 31),
		},
		description: "Contributed to a Java/Spring Boot batch application for processing over 100k US home loans.",
		employmentType: EmploymentType.Intern,
		image: "/assets/companies/jpmc.jpg",
		skills: ["Java", "Spring Boot"],
	},
	{
		company: "Engineer's United",
		title: "Technical Lead",
		date: {
			start: new Date(2020, 7, 1),
			end: new Date(2022, 1, 31),
		},
		description:
			"Assisted in managing the annual HackUNT event with over 400 participants. Focused on event planning, coordination, and managing relationships with key sponsors like GitHub and JPMorgan. Played a significant role in developing and maintaining the event’s website.",
		employmentType: EmploymentType.PartTime,
		skills: ["Event Planning", "Sponsorship Management"],
	},
	{
		company: "Seizing Every Opportunity (SEO)",
		title: "Software Engineer",
		date: {
			start: new Date(2021, 5, 1),
			end: new Date(2021, 7, 31),
		},
		description:
			"Learned full-stack development principles and developed web applications using Python and Flask, deployed on Heroku. Emphasized agile methods, testing, and pair programming, significantly improving technical and team collaboration skills.",
		employmentType: EmploymentType.Intern,
		skills: ["Python", "Flask", "MySQL", "Heroku"],
	},
] as const;
