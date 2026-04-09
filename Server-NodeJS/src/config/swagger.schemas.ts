/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       description: Representa un curso del sistema
 *       required:
 *         - id
 *         - title
 *         - instructor
 *         - durationHours
 *         - area
 *         - isActive
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         title:
 *           type: string
 *           example: Arquitectura de Frontend
 *         instructor:
 *           type: string
 *           example: Jesus Mejia
 *         durationHours:
 *           type: number
 *           example: 32
 *         area:
 *           type: string
 *           enum:
 *             - Frontend
 *             - Backend
 *             - Data
 *             - DevOps
 *           example: Frontend
 *         isActive:
 *           type: boolean
 *           example: true
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       description: Representa un proveedor del sistema
 *       required:
 *         - id
 *         - name
 *         - contactName
 *         - email
 *         - phone
 *         - city
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Proveedores del Valle SAS
 *         contactName:
 *           type: string
 *           example: Laura Torres
 *         email:
 *           type: string
 *           format: email
 *           example: laura.torres@example.com
 *         phone:
 *           type: string
 *           example: +57 300 111 2233
 *         city:
 *           type: string
 *           example: Buga
 *         status:
 *           type: string
 *           enum:
 *             - Active
 *             - Inactive
 *           example: Active
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa una orden del sistema
 *       required:
 *         - id
 *         - code
 *         - customerName
 *         - total
 *         - status
 *         - createdAt
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         code:
 *           type: string
 *           example: ORD-123456
 *         customerName:
 *           type: string
 *           example: Ana Maria Gomez
 *         total:
 *           type: number
 *           example: 359.95
 *         status:
 *           type: string
 *           enum:
 *             - Pending
 *             - Processing
 *             - Completed
 *             - Cancelled
 *           example: Processing
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: '2026-04-09T18:30:00.000Z'
 */
export {};